import axios from "axios";
import { getAuthToken } from "./AuthService";

const REST_API_BASE_URL='https://voiture-production-524c.up.railway.app/api/voiture/';
const token=getAuthToken();

export const listAnnonceValider = () =>  
    axios.get(
        REST_API_BASE_URL+"annonce/validation",
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const valider = (idAnnonce) => 
    axios.get(
        REST_API_BASE_URL+"annonce/validation/"+idAnnonce,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
) ;