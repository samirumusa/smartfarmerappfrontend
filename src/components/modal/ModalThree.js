import {Modal, Button, Accordion} from 'react-bootstrap'
import SnapCard from '../snapcard/SnapCardId'
export default function MyHelpModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Help
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What  is a Smartfarmerapp</Accordion.Header>
            <Accordion.Body>
              It is an application that enables farmers to instantly identify diseases and also identify certain plants. We have very rich dataset and we utilise the power of deep learning to generate our results.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What are the benefits?</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Most farmers are not aware of many diseases that affect their farm yield. Now, they get to identify them early with the help of our app</li>
                <li>By detecting diseases early and eliminating them, the farmer make more profit due to increased/saved yield</li>
                <li>If the yield of farmer could increase, then the distributors and any other party on the value chain stand to benefit</li>
                <li>Our app helps the farmer to become more aware of his farm by having the capacity to identify every weed that appears</li>
                <li>Extension workers, researchers and students would benefit with our solution</li>
                <li>Animal farms would identify harmful and harmless legumes to feed their animals</li>
                </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What are the diseases that the app could identify?</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Apple scab</li>
                <li>Apple Black rot</li>
                <li>Cedar apple rust</li>
                 <li>Cherry powdery mildew</li>
                 <li>Maize cercospora leaf spot</li>
                 <li>Maize gray leaf spot</li>
                 <li>Maize common rust</li>
                 <li>Maize northern leaf blight</li>
                 <li>Grape black rot</li>
                 <li>Grape Esca (Black Measles)</li>
                 <li>Grape Leaf blight (Isariopsis Leaf Spot)</li>
                 <li>Orange Haunglongbing (Citrus greening)</li>
                 <li>Peach Bacterial spot</li>
                 <li>Pepper bell Bacterial spot</li>
                 <li>Pepper bell healthy</li>
                 <li>Potato Early blight</li>
                 <li>Potato Late blight</li>
                 <li>Squash Powdery mildew</li>
                 <li>Strawberry Leaf scorch</li>
                 <li>Tomato bacterial spot</li>
                 <li>Tomato early blight</li>
                 <li>Tomato late blight</li>
                 <li>Tomato leaf mold</li>
                 <li>Tomato Septoria leaf spot</li>
                 <li>Tomato spidermites/ two-spotted spider mite</li>
                 <li>Tomato target spot</li>
                 <li>Tomato yellow leaf curl virus</li>
                 <li>Tomato mosaic virus</li>
                </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>What is a health status?</Accordion.Header>
            <Accordion.Body>
              <h3>Our app has enough intelligence to identify the health status of all the following plants.</h3>
              <ul>
                 <li>Apple</li>
                 <li>Bluebery</li>
                 <li>Cherry</li>
                 <li>Maize</li>
                 <li>Tomato</li>
                 <li>Potato</li>
                 <li>Peach</li>
                 <li>Grape</li>
                 <li>Pepper</li>
                 <li>Squash</li>
                 <li>Strawberry</li>
                </ul>
                <p>* if a plant is not in the above list then any health status from our app should be considered void</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>What is Bing Voice Search?</Accordion.Header>
            <Accordion.Body>
              <h3>It is the integration of the bing search, one of the leading search engines in the world</h3>
              <ul>
                 <li>A user could search the internet to find more information about the plant or the disease identified by our app</li>
                 <li>A voice is used instead of text</li>
                </ul>
                </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>What is next?</Accordion.Header>
            <Accordion.Body>
              <h3>There are several developments coming up!</h3>
              <ul>
                 <li>Improve speed of our machines as we gravitate to better partners</li>
                 <li>Additional plants to be identified</li>
                 <li>Listening to users feedback and adapt...........</li>
                 <li>We would add a 'similar picture' of the disease identification</li>
                </ul>
                </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Do you have any test data?</Accordion.Header>
            <Accordion.Body>
              <h3>Yes you could use the following test data. Please, click the link and download</h3>
              <ul>
                 <li><a href="/images/test_apple.JPG" download >Cedar apple rust</a></li>
                 <li><a href="/images/test_potato.JPG" download >Potatot Early Blight</a></li>
                 <li><a href="/images/test_tomato.JPG" download >Tomato Septoria  Leaf Spot</a></li>
                 <li><a href="/images/test_maize.JPG" download>Maize Common Rust</a></li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    );
  }