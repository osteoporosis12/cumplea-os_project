import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import axios from "axios";

import { getAll, deleteItem } from '../api/invitados.api';

function Tabla() {
  const [datos, setDatos] = useState(null);
  const [invitados, setInvitados] = useState(0);
  const [acompañantes, setAcompañantes] = useState(0);

  function contar(data) {
    let i=0;
    let a=0.0;
    data.map((person, index) => {
    i++;
    a+=parseInt(person.parnerts);
  })
  setAcompañantes(a);
  setInvitados(i);
  }


  useEffect(() => {
    async function loadInvitados() {
      const res = await getAll();
      setDatos(res.data.items);
      contar(res.data.items)
    }

    loadInvitados();
  }, []);

  const handleDelete = async (id) => {
    await deleteItem(id);
    contar(datos)
    setDatos(datos.filter((item) => item._id !== id));
    
  };

  return (
    <div className='container'>
      <h1>INVITADOS</h1>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>NOMBRES</th>
            <th>APELLIDOS</th>
            <th>ACOMPAÑANTES</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datos &&
            datos.map((person, index) => (
              <tr key={person._id}>
                <td>{index + 1}</td>
                <td>{person.name}</td>
                <td>{person.lastName}</td>
                <td>{person.parnerts}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(person._id)}>Eliminar</button>
                </td>
              </tr>
            ))}
            <tr key="xddsa">
                <td>{}</td>
                <td>Total: {invitados}</td>
                <td>{}</td>
                <td>Total: {acompañantes}</td>
              </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Tabla;
