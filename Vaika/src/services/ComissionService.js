import axios from "axios";
import { getAuthToken } from "./AuthService";

const REST_API_BASE_URL='https://voiture-production-524c.up.railway.app/api/voiture/';

let token=getAuthToken();
console.log(token)


export const listComissions = () =>  
    axios.get(
        REST_API_BASE_URL+"commissions",
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const createComission = (comission) => 
    axios.post(
        REST_API_BASE_URL+"commission",
        comission,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const getComission = (idcomission) => 
    axios.get(
        REST_API_BASE_URL+"commission/"+idcomission,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
) ;

export const updateComission = (comission) => 
    axios.put(
        REST_API_BASE_URL+"commission",
        comission,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const deleteComission = (idcomission) => 
    axios.delete(
        REST_API_BASE_URL+"commission/"+idcomission,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);