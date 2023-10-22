import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css'
import ModalS from './components/Modal';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createInvitados } from './api/invitados.api';
function BasicExample() {
  const { register, handleSubmit } = useForm();
  const [modalShow, setModalShow] = useState(false);
  const [nameComplet,setNameComplet] =useState(null);
  
  const enviar = handleSubmit(async(data) => {
    console.log(data )
    setNameComplet(data['name']+" "+data['lastName'])
    const res = await createInvitados(data);
    console.log(res )
    setModalShow(true)
  });

  return (
    <div className='container abs-center'>
      <div className='form'>

        <h1 className='abs-center2'>CUMPLEAÑOS</h1>
        <Form onSubmit={enviar} >
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