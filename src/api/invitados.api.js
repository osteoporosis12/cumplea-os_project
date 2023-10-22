import axios from "axios";


export const getAll= () => {
    const respuesta = axios.get('http://localhost:8000/back_cumple/api/invitados/back_cumple/');
    return respuesta;
}


export const createInvitados= (invitado) => {
    const respuesta = axios.post('http://localhost:8000/back_cumple/api/invitados/back_cumple/',invitado);
    return respuesta;
}