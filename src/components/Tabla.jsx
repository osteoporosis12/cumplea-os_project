import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import axios from "axios";

import {getAll} from '../api/invitados.api'



function Tabla() {
  const [datos,setDatos]=useState(null)
  useEffect(()=>{
    console.log("entras")
    async function loadInvitados(){
      const res = await getAll()
      console.log(res)
      setDatos(res.data)
    }

    loadInvitados();
  }, [])

  return (
    <div className='container'>
      <h1>INVITADOS</h1>
      <Table striped bordered hover variant="striped">
        <thead>

          <tr>
            <th>#</th>
            <th>NOMBRES</th>
            <th>APELLIDOS</th>
            <th>ACOMPAÑANTES</th>
          </tr>
        </thead>
        <tbody>
          {
            datos && datos.map((person,index) => 
              <tr key={index+person.name}>
                <td>{index}</td>
                <td>{person.name}</td>
                <td>{person.lastName}</td>
                <td>{person.parnerts}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  );
}

export default Tabla;