import axios from "axios";
import { getAuthToken } from "./AuthService";

const REST_API_BASE_URL='https://voiture-production-524c.up.railway.app/api/voiture/';

let token=getAuthToken();
console.log(token)


export const listCouleurs = () =>  
    axios.get(
        REST_API_BASE_URL+"couleurs",
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const createCouleur = (couleur) => 
    axios.post(
        REST_API_BASE_URL+"couleur",
        couleur,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const getCouleur = (idcouleur) => 
    axios.get(
        REST_API_BASE_URL+"couleur/"+idcouleur,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
) ;

export const updateCouleur = (couleur) => 
    axios.put(
        REST_API_BASE_URL+"couleur",
        couleur,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const deleteCouleur = (idcouleur) => 
    axios.delete(
        REST_API_BASE_URL+"couleur/"+idcouleur,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);