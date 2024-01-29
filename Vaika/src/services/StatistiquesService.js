import axios from "axios";
import { getAuthToken } from "./AuthService";

const REST_API_BASE_URL='https://voiture-production-524c.up.railway.app/api/voiture/';

let token=getAuthToken();


export const listSpecifications = () =>  
    axios.get(
        REST_API_BASE_URL+"statistique",
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);
