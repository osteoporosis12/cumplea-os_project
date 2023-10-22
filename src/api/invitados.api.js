import axios from "axios";


export const getAll= () => {
    const respuesta = axios.get('https://cumplea-os-backend.vercel.app/api/items');
    return respuesta;
}


export const createInvitados= (invitado) => {
    const respuesta = axios.post('https://cumplea-os-backend.vercel.app/api/items',invitado);
    return respuesta;
}
export const deleteItem =  (id) => {
    try {
      // Realiza una solicitud DELETE al servidor, reemplaza 'URL_DEL_API' por la URL real de tu API
      const response =  axios.delete(`https://cumplea-os-backend.vercel.app/api/items/${id}`);
      return response.data; // Puedes manejar la respuesta del servidor si es necesario
    } catch (error) {
      // Maneja cualquier error que pueda ocurrir durante la solicitud
      throw error;
    }
  };