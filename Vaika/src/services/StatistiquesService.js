import axios from "axios";
import { getAuthToken } from "./AuthService";

const REST_API_BASE_URL='https://voiture-production-524c.up.railway.app/api/voiture/';

let token=getAuthToken();


export const statElelemnt = () =>  
    axios.get(
        REST_API_BASE_URL+"stat",
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);
