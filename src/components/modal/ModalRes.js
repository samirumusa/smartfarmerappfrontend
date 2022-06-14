import {Modal, Button} from 'react-bootstrap'
import SnapCard from '../snapcard/SnapCard'
export default function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Scan for Diseases
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SnapCard></SnapCard>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    );
  }