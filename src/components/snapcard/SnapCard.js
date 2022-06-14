import {Card, Button, Spinner} from 'react-bootstrap'
import {BiCloudUpload} from 'react-icons/bi'
import {useState, useRef, useEffect} from 'react'
import * as tf from '@tensorflow/tfjs'
import './snapcard.scss'
import {tabData} from  './tab_data'
import ReactTab from '../tabs/reactTab'
 
export default function SnapCard(){
    const [imageURL, setImageURL] = useState(null)
    const [model, setModel] = useState(null)
    const [Description,setDescription]= useState(null)
    const [Prevention, setPrevention] = useState(null)
    const [Treatment, setTreatment] = useState(null)
    const [Bing,setBing] = useState(null)
    const [result,setResult] = useState(null)
    const [status,setStatus] =useState(false)
    const [healthStatus,setHealthStatus] =useState(false)
    const imageRef = useRef()
    const[refacquired,setRefacquired] = useState(null)

    useEffect(()=>{

       setRefacquired(imageRef.current)
    })
    
   
   //'https://smartfarmerapp.techpharmaltd.com
    const url = {
        model: 'https://smartfarmerapp.techpharmaltd.com/tensorflowjs-model/model.json',
        tab:   'https://smartfarmerapp.techpharmaltd.com/tab_data.js',
    };

  const resultDiv =()=>{
      return (
        <>
        
        <ReactTab className="reactTab" Description={Description} Prevention={Prevention} Treatment={Treatment} Bing={Bing}></ReactTab>
             
        </>
      )
    }
    async function ScanDisease(){

      
      await loadModel(url).then( async() => { 
       
        await identifyDisease()
        
        
     })
     
    }
    async function loadModel(url) {
        try {
          setStatus(true)
          // For layered model
          const models = await tf.loadLayersModel(url.model);
          // For graph model
          // const model = await tf.loadGraphModel(url.model);
          await setModel(models);
         //model.summary()
          setStatus(false)
          console.log("Load model success");
        } catch (err) {
          setStatus(false)
          console.log(err);
        }
      } 

  
    const uploadImage =async (e)=>{
     setStatus(true)
    const {files} = e.target
    if(files.length>0){
        const uri = URL.createObjectURL(files[0])
        setImageURL(uri)
        await setStatus(false)
    }else{
        setImageURL(null)
        setStatus(false)
    }
    }
    const getData = ()=>{

     return  fetch('./class_indices.json'
    
        ,{
    
          headers : { 
    
            'Content-Type': 'application/json',
    
            'Accept': 'application/json'
    
           }
    
        }
    
        )
    
          .then(function (response){
    
            //console.log(response)
            
           
            
            return response.json();;
    
          }).then((json)=>{
            let data = JSON.stringify(json);
            data = JSON.parse(data);
            //console.log(data["1"])
            return data

          })
      }

      //console.log(tabData['Apple___Apple_scab'])
     

   const identifyDisease = async ()=> {
         setStatus(true) 
      let offset = tf.scalar(255)
      let tensorImg =   tf.browser.fromPixels(refacquired).resizeNearestNeighbor([224,224]).toFloat().expandDims();
      let tensorImg_scaled = tensorImg.div(offset)
      
      const models= await tf.loadLayersModel('https://smartfarmerapp.techpharmaltd.com/tensorflowjs-model/model.json');
      const result = await models.predict(tensorImg_scaled).data();

       await  fetch('./class_indices.json'
    
        ,{
    
          headers : { 
    
            'Content-Type': 'application/json',
    
            'Accept': 'application/json'
    
           }
    
        }
    
        )
          .then(function (response){
            
            //console.log(response)
           return response.json();

          }).then(async (json)=>{
            
            let data = JSON.stringify(json);
            data = JSON.parse(data);

            //console.log(data["1"])

            const predicted_class = tf.argMax(result)
                    
            const class_idx = Array.from(predicted_class.dataSync())[0]
            if(data[class_idx].search('healthy') !== -1){
              setHealthStatus(true)
           }
            console.log(data[class_idx])
            console.log(class_idx)
            console.log(tabData[data[class_idx]])
            await setDescription(tabData[data[class_idx]].Description)
            setStatus(false)
            await setPrevention(tabData[data[class_idx]].Prevention)
            await setTreatment(tabData[data[class_idx]].Treatment)
            await setBing(tabData[data[class_idx]].Bing)
            
            
            
            //await setResult(resultDiv())
            /* console.log(tabData[data[class_idx]].Description)
            console.log(tabData[data[class_idx]].Bing)
            console.log(data)  
            console.log(data[class_idx]) */
            

          })
         
 
   }
 
    return(
        <>
       { status === true ? <Spinner animation="grow" variant="success"/> :
        <Card className="text-center">
            <Card.Header className="snapHeader" style={{background:'green'}}>Take a Picture</Card.Header>
            <Card.Body className="snapBody">
                <Card.Title>Snap or Upload a Picture</Card.Title>
                <Card.Text>
                     Please, use your camera to upload the image of the infected leaf or upload an existing one from your device.
                </Card.Text>
                <div  className='imgContainer'>
                    {imageURL!==null ? <img src={imageURL} alt="Preview" width="224" height="224" crossOrigin='anonymous' ref={imageRef}/> : <BiCloudUpload className="cIcon"></BiCloudUpload>}
                </div>
                <div className="cbtn">
                    <input type="file" accept='image/*'   className="uploadImage" onChange={uploadImage}/>
                </div> 
                {healthStatus &&                   <div className="cbtn">
                     <Button variant="success" size="60px">Status ---- Healthy Plant!</Button>
                 </div> 
                }
                {imageURL &&
                    <div className="cbtn">
                     <Button variant="success" size="lg" onClick={ScanDisease}>Scan Disease</Button>
                 </div>
                }

                {Description &&
                    
                           <ReactTab className="reactTab" Description={Description} Prevention={Prevention} Treatment={Treatment} Bing={Bing}></ReactTab>
          
                }
            </Card.Body>
            <Card.Footer className="text-muted snapFooter" style={{background:'green'}}></Card.Footer>
        </Card>}
        </>
    )
}
