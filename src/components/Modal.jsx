import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalS(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Invitacion Creada
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.name} se te registrado correctamente</h4>
        <p>
          Has sido añadido a la lista de invitados!
        </p>
      </Modal.Body>
      <Modal.Footer>
      <a className='continer icon2' href='https://maps.app.goo.gl/sPrKFTo93J3TL8eYA' target='_blank'>
      <Button variant="outline-success">VER MAPA</Button>
            
          </a>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default ModalS;