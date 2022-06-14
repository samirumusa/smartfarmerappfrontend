import {Carousel, Button} from 'react-bootstrap'
import {useState} from 'react'
import MyVerticallyCenteredModal from '../modal/ModalRes'
import MyCenteredModal from '../modal/ModalTwo'

import './hero.css'


export default function  HeroSection(){
  const [modalShow, setModalShow] = useState(false);
  const [modalTwoShow, setModalTwoShow] = useState(false);
  
    return(
    <>
    
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    <MyCenteredModal
        show={modalTwoShow}
        onHide={() => setModalTwoShow(false)}
      />
<Carousel>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100 vh-100"
      src="./images/plant7.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    <div className='align-items-center'>
      <h1>Welcome to SmartFarmer App</h1>
      <h4>Identify a plant or scan for diseases in few clicks</h4>
      <div className="cbtn-container">
      <div className="cbtn">
         <Button variant="success" size="lg" onClick={() => setModalTwoShow(true)}>Identify a Plant</Button>
      </div>
      <div className="cbtn">
          <Button className="ml-2" variant="success" size="lg" onClick={() => setModalShow(true)}>Scan for Disease</Button>
      </div>
      </div>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100 vh-100"
      src="./images/plant2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
    <div className='align-items-center'>
      <h1>Welcome to SmartFarmer App</h1>
      <h4>Identify a plant or scan for diseases in few clicks</h4>
      <div className="cbtn-container">
      <div className="cbtn">
         <Button variant="success" size="lg"  onClick={() => setModalTwoShow(true)}>Identify a Plant</Button>
      </div>
      <div className="cbtn">
          <Button className="ml-2" variant="success" size="lg" onClick={() => setModalShow(true)}>Scan for Disease</Button>
      </div>
      
      </div>
    </div>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 vh-100"
      src="./images/plant4.jpeg"
      alt="Third slide"
    />
    <Carousel.Caption>

    <div className='align-items-center'>
      <h1>Welcome to SmartFarmer App</h1>
      <h4>Identify a plant or scan for diseases in few clicks</h4>
      <div className="cbtn-container">
      <div className="cbtn">
         <Button variant="success" size="lg" onClick={() => setModalTwoShow(true)}>Identify a Plant</Button>
      </div>
      <div className="cbtn">
          <Button className="ml-2" variant="success" size="lg" onClick={() => setModalShow(true)}>Scan for Disease</Button>
      </div>
      
      </div>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
    )
}