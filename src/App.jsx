import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css'
import ModalS from './components/Modal';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createInvitados } from './api/invitados.api';
function BasicExample() {
  const { register, handleSubmit,reset } = useForm();
  const [modalShow, setModalShow] = useState(false);
  const [nameComplet, setNameComplet] = useState(null);

  const enviar = handleSubmit(async (data) => {
    console.log(data)
    reset()
    setNameComplet(data['name'] + " " + data['lastName'])
    const res = await createInvitados(data);
    console.log(res)
    setModalShow(true)
    
  });

  return (
    <div className='container abs-center'>
      <a className='continer icon' href='https://maps.app.goo.gl/sPrKFTo93J3TL8eYA'  target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3ec03e" className="w-3 h-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
            </svg>
          </a>
      <div className='form'>

        <h1 className='abs-center2'>CUMPLEAÑOS</h1>
        <Form  onSubmit={enviar} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombres del invitado</Form.Label>
            <Form.Control type="text" placeholder="Nombres" {...register("name")} required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Apellidos del invitado</Form.Label>
            <Form.Control type="text" placeholder="Apellidos" {...register("lastName")} required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Cantidad de acompañantes</Form.Label>
            <Form.Control defaultValue={0} min={0} type="number" placeholder="Acompañantes" {...register("parnerts")} required />
          </Form.Group>


          <Button className='abs-center2' variant="primary" type="submit"  >
            Submit
          </Button>
          
        </Form>

        <ModalS show={modalShow}
          onHide={() => setModalShow(false)} name={nameComplet}></ModalS>
      </div>

    </div>
  );
}
export default BasicExample;