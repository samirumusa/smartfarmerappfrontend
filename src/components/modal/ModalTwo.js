import {Modal, Button} from 'react-bootstrap'
import SnapCard from '../snapcard/SnapCardId'
export default function MyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Identify a Plant
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