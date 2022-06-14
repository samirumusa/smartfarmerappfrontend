import React, { useState, useEffect } from 'react';
import {Tab,Tabs,Row,Nav,Col,Card,Button,ButtonGroup} from 'react-bootstrap';
import './reactTab.scss'
import {BiMicrophone} from 'react-icons/bi'

function ReactTab(prop) {
 /*  console.log(prop)
  prop = JSON.stringify(prop);
  prop = JSON.parse(prop); */
   
   const Seriel = {
     
       '0':'One',
       '1':'Two',
       '2':'Three',
       '3':'Four',
       '4':'Five'

   }

   const PreventionContents =()=>{
     return(Object.values(prop.Prevention).map((val,idx)=>{
       return(
        <Tab.Pane className="paneTab" eventKey={`prev_${idx}`} key={`treat_${idx}`}>
        {val}
      </Tab.Pane>
       )
     }))
   }
   const TreatmentContents =()=>{
    return(Object.values(prop.Treatment).map((val,idx)=>{
      return(
       <Tab.Pane  className="paneTab" eventKey={`treat_${idx}`} key={`treat_${idx}`}>
       {val}
     </Tab.Pane>
      )
    }))
  }
   const BingSuggestion = ()=>{

    return( Object.values(prop.Bing).map((val,idx)=>{

     return (<Button variant="success" className="mt-2"key={`treat_${val}`}>{val}</Button>)
     }))
       
    }
    const PreventionItems = ()=>{

      return( Object.values(prop.Prevention).map((val,idx)=>{
             
       return (<Nav.Item>
           <Nav.Link eventKey={`prev_${idx}`}  key={`prev_${idx}`}>{Seriel[idx]}</Nav.Link>
        </Nav.Item>)
       }))
         
      }
    const TreatmentItems = ()=>{
        

        return( Object.values(prop.Treatment).map((val,idx)=>{
               
         return (<Nav.Item className="mainNav" >
             <Nav.Link  className="mainNavLink"  eventKey={`treat_${idx}`} key={`treat_${idx}`}>{Seriel[idx]}</Nav.Link>
          </Nav.Item>)
         }))
           
        }
    return ( 
        
        <Tabs defaultActiveKey="Description" id="uncontrolled-tab-example" className="mainTabs mb-3" style={{color:'white'}}>
    <Tab eventKey="Description" title="Description" style={{color:'white'}} className="mainTab paneTab">
        {Object.values(prop.Description)}
    </Tab>
    <Tab eventKey="Prevention" title="Prevention" className="mainTab" style={{color:'white'}}>
      
        <Tab.Container id="left-tabs-example" defaultActiveKey="prev_0" className="mainTabs">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <PreventionItems></PreventionItems>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                    <PreventionContents></PreventionContents>
                </Tab.Content>
              </Col>
            </Row>
        </Tab.Container>
    </Tab>
    <Tab eventKey="Treatment" title="Treatment" className="mainTab" style={{color:'white'}}>
     
      <Tab.Container id="left-tabs-example" defaultActiveKey="treat_0" className="mainTabs">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <TreatmentItems className="mainNav"></TreatmentItems>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                    <TreatmentContents></TreatmentContents>
                </Tab.Content>
              </Col>
            </Row>
      </Tab.Container>
    </Tab>
    <Tab eventKey="advance" title="Advance Search" style={{color:'white'}}>
    
      <Card className="text-center">
      <Card.Header style={{background:'green'}}> Advanced Search with Bing Voice </Card.Header>
      <Card.Body className="mainTabs">
        <Card.Title>Say something!</Card.Title>
        <Card.Text>
          Now that you have identified a disease! 
        </Card.Text>
        <Card.Text>
          Search for more infomation in one of the leading search engines with your voice
        </Card.Text>
         
        <Button variant="success" className="rounded-circle" size="lg"><BiMicrophone></BiMicrophone></Button>
      </Card.Body>
      <Card.Footer className="text-muted">
      <Card.Title>Voice Suggestions</Card.Title>
      <ButtonGroup aria-label="Basic example" className="flex-wrap mt-2">
        <BingSuggestion></BingSuggestion>
      </ButtonGroup>
      </Card.Footer>
    </Card>
    </Tab>
  </Tabs>);
}

export default ReactTab;