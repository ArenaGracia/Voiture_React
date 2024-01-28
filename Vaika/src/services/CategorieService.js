import axios from "axios";
import { getAuthToken } from "./AuthService";

const REST_API_BASE_URL='https://voiture-production-524c.up.railway.app/api/voiture/';

let token=getAuthToken();
console.log(token)


export const listCategories = () =>  
    axios.get(
        REST_API_BASE_URL+"categories",
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const createCategorie = (categorie) => 
    axios.post(
        REST_API_BASE_URL+"categorie",
        categorie,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const getCategorie = (idcategorie) => 
    axios.get(
        REST_API_BASE_URL+"categorie/"+idcategorie,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
) ;

export const updateCategorie = (categorie) => 
    axios.put(
        REST_API_BASE_URL+"categorie",
        categorie,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const deleteCategorie = (idcategorie) => 
    axios.delete(
        REST_API_BASE_URL+"categorie/"+idcategorie,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);