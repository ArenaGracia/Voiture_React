import axios from "axios";
import { getAuthToken } from "./AuthService";

const REST_API_BASE_URL='https://voiture-production-524c.up.railway.app/api/voiture/';

let token=getAuthToken();
console.log(token)



export const listMarques = () =>  
    axios.get(
        REST_API_BASE_URL+"marques",
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const createMarque = (marque) => 
    axios.post(
        REST_API_BASE_URL+"marque",
        marque,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const getMarque = (idMarque) => 
    axios.get(
        REST_API_BASE_URL+"marque/"+idMarque,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
) ;

export const updateMarque = (Marque) => 
    axios.put(
        REST_API_BASE_URL+"marque",
        Marque,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const deleteMarque = (idMarque) => 
    axios.delete(
        REST_API_BASE_URL+"marque/"+idMarque,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);