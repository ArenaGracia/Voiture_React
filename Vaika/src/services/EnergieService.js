import axios from "axios";
import { getAuthToken } from "./AuthService";

const REST_API_BASE_URL='https://voiture-production-524c.up.railway.app/api/voiture/';

let token=getAuthToken();
console.log(token)



export const listEnergies = () =>  
    axios.get(
        REST_API_BASE_URL+"energies",
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const createEnergie = (energie) => 
    axios.post(
        REST_API_BASE_URL+"energie",
        energie,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const getEnergie = (idEnergie) => 
    axios.get(
        REST_API_BASE_URL+"energie/"+idEnergie,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
) ;

export const updateEnergie = (energie) => 
    axios.put(
        REST_API_BASE_URL+"energie",
        energie,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const deleteEnergie = (idEnergie) => 
    axios.delete(
        REST_API_BASE_URL+"energie/"+idEnergie,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);