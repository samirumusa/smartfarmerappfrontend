import {useState} from 'react'
import {Nav, Navbar,Container } from 'react-bootstrap';
import './navCss.scss'
import MyHelpModal from '../modal/ModalThree'

export default function NavBarBoot(){
  const [modalThreeShow, setModalThreeShow] = useState(false);
  return(
    
    <>
     <MyHelpModal
        show={modalThreeShow}
        onHide={() => setModalThreeShow(false)}
      />
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container className='navBarContainer'>
      <Navbar.Brand href="#home">Smart Farmer</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
       
        <Nav className="navItems">
         
              <Nav.Link  href="#deets"  onClick={() => setModalThreeShow(true)}>Help</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Contact
              </Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>

    </>)
    
  }
