import {Card, Button, Alert, Spinner, Row, Col} from 'react-bootstrap'
import {BiCloudUpload} from 'react-icons/bi'
import {useState, useRef, useEffect} from 'react'
import * as tf from '@tensorflow/tfjs'
import './snapcard.scss'
import axios from 'axios'
import {tabData} from  './tab_data'
import ReactTab from '../tabs/reactTab'
import {BiMicrophone} from 'react-icons/bi'
 
export default function SnapCardid(){
    const [imageURL, setImageURL] = useState(null)
    const [imagePath,setImagePath] = useState(null)
    const [imagePath2,setImagePath2] = useState(null)
    const [description,setDescription] = useState(null)
    const [botanical, setBotanical] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageName, setImageName] = useState(null)
    const [press, setPress] = useState(null)
    const [plantName,setPlantName] = useState(null)
    const [status,setStatus] =useState(false)
    const [base64files, setBase64files] =useState(false)
    const imageRef = useRef()
   
 
  const url = {
        model: 'http://smartfarmerapp.techpharmaltd.com/tensorflowjs-model/model.json',
        plantId:  "https://api.plant.id/v2/identify"
    };
    


/* async function saveImage(data){
     setStatus(true)
  try{

  await   axios.post('https://smartfarmerapp.techpharmaltd.com/api/upload/',data,{headers:{"Content-Type":"multipart/form-data"}}).then( async (res) => {
       
        let dat = JSON.stringify(res.data);
        dat = JSON.parse(dat);
      await setImagePath(dat["path"])
     setStatus(false)
        //console.log(dat["path"])
        //console.log(dat)
        
   }).catch(error => {
       console.error('Error: ', error)
   },[]) 
  }catch(err){
    console.log(err)
  }
}
 */
const convertToBase64 = (file)=>{

  return new Promise((resolve,reject) => {
    
    var reader = new FileReader();

    // Convert data to base64
    reader.readAsDataURL(file);
    // Read file content on file loaded event
    reader.onload= ()=>{
      resolve(reader.result)
    }

    reader.onerror= (error)=>{
      reject(error)
    }

  });

}

const uploadImage =async (e)=>{
     setStatus(true)
    const {files} = e.target
    //console.log(files[0])
    setSelectedFile(e.target.files[0])
    const data = new FormData()
    data.append('file', e.target.files[0])
    console.log('this is data  '+data)
    console.log(imagePath)
    const imageConverted = await convertToBase64(e.target.files[0])
    setBase64files(imageConverted)
    console.log(imageConverted)
    if(files.length>0){
        const uri = URL.createObjectURL(files[0])
        setImageURL(uri)
        setImageName(files[0].name)
        setStatus(false)
    
    }else{
        setImageURL(null)
    }
    }

async function searchId(){
  //console.log(imageURL)
  //https://backend.techpharmaltd.c
  const data = {
    api_key: "sKchyk9T3TmRlUpxBQlP4ImMe7VGBk4gzJRjZ4XwAPL3xGtLKQ",
    images:[ base64files],
    /* modifiers docs: https://github.com/flowerchecker/Plant-id-API/wiki/Modifiers */
    modifiers: ["crops_fast", "similar_images"],
    plant_language: "en",
    /* plant details docs: https://github.com/flowerchecker/Plant-id-API/wiki/Plant-details */
    plant_details: ["common_names",
        "url",
        "name_authority",
        "wiki_description",
        "taxonomy",
        "synonyms"],
        };

   await axios.post('https://api.plant.id/v2/identify', data).then(async(resp )=> {
            console.log('Success:', resp.data);
              //const result = resp.data
              const top  = resp.data.suggestions[0].plant_name
              const details =resp.data.suggestions[0].plant_details
              const similar = resp.data.suggestions[0].similar_images

              await setImagePath(similar[0].url)
              await setImagePath2(similar[1].url)
              await setDescription(details.wiki_description.value)
              await setBotanical(top)
              await setPlantName(details.common_names[0]+', '+details.common_names[1])
  

        }).catch(error => {
            console.error('Error: ', error)
        })

        
  
}
 

   const identifyPlant = async ()=>{
     if(base64files !== null){
        setStatus(true)
      searchId().then((dt)=>{
        setStatus(false)
      }).catch((err)=>{
        console.log(err)
        setStatus(false)
      })
     }


   }
  
    return(
        <>
        
       { status === true ? <Spinner animation="grow" variant="success"/> :
        <Card className="text-center">
            <Card.Header className="snapHeader" style={{background:'green'}}>Take a Picture</Card.Header>
            <Card.Body className="snapBody">
                 
                <Card.Title>Snap or Upload a Picture</Card.Title>
                <Card.Text>

                   {press}
                     Please, use your camera to upload the image of the plant or upload an existing one from your device.
                     {botanical && 
                     <Alert key='one' variant='info' className="mt-3">
                           <Card.Title>{botanical}</Card.Title>
                          <h5>{plantName}</h5>
                      </Alert>}
                          
                </Card.Text>
                <Row  className='imgContainer '>
                   <Col md={8} className="image_path">
                    {imageURL!==null ? <img src={imageURL} alt="Preview Image1" width="224" height="224"  ref={imageRef}/> : <BiCloudUpload className="cIcon"></BiCloudUpload>}
                    </Col>
                    <Col className="image_path mt-2" style={{marginTop:'5px'}}  md={4}>
                      
                            {imagePath && <img src={imagePath} alt="Preview Image2" width="200" height="224"  />}
                    </Col>
                    <Col className="image_path mt-2" style={{marginTop:'5px'}} md={4}>
                    {imagePath2 && <img src={imagePath2} alt="Preview Image3" width="200" height="224"  /> }
              
                    </Col>
                </Row>
                <div className="image_path">
                    <input type="file" accept='image/*'  className="uploadImage" onChange={uploadImage}/>
                </div> 
                {imageURL &&
                    <div className="cbtn">
                     <Button variant="success" size="lg" onClick={identifyPlant}>Identify Plant</Button>
                 </div>
                }
                {botanical &&<Card
                      bg='success'
                      key='success'
                      text={'success' === 'light' ? 'dark' : 'white'}
                      style={{ width: '100%' }}
                      className="mb-2 mt-2"
                    >
                      <Card.Header>Description</Card.Header>
                      <Card.Body>
                        <Card.Title>{botanical} {plantName}</Card.Title>
                        <Card.Text>
                         {description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    
                   }
                    
                    {botanical && <Card className="text-center">
              <Card.Header style={{background:'green'}}>Advanced Search with Bing Voice</Card.Header>
              <Card.Body className="mainTabs">
                <Card.Title>Say something!</Card.Title>
                <Card.Text>
                  Now that you have identified your plant 
                </Card.Text>
                <Card.Text>
                  Search for more infomation in one of the leading search engines with your voice....
                </Card.Text>
                
                <Button variant="success" className="rounded-circle" size="lg"><BiMicrophone></BiMicrophone></Button>
              </Card.Body>
              <Card.Footer className="text-muted">
              </Card.Footer>
            </Card>}
            </Card.Body>
            <Card.Footer className="text-muted" style={{background:'green'}}></Card.Footer>
        </Card>}
        </>
    )
}