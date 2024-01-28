import axios from "axios";
import { getAuthToken } from "./AuthService";

const REST_API_BASE_URL='https://voiture-production-524c.up.railway.app/api/voiture/';

let token=getAuthToken();
console.log(token)


export const listSpecifications = () =>  
    axios.get(
        REST_API_BASE_URL+"specifications",
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const createSpecification = (specification) => 
    axios.post(
        REST_API_BASE_URL+"specification",
        specification,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const getSpecification = (idSpecification) => 
    axios.get(
        REST_API_BASE_URL+"specification/"+idSpecification,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
) ;

export const updateSpecification = (specification) => 
    axios.put(
        REST_API_BASE_URL+"specification",
        specification,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const deleteSpecification = (idSpecification) => 
    axios.delete(
        REST_API_BASE_URL+"specification/"+idSpecification,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);