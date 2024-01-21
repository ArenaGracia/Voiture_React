import axios from "axios";

const REST_API_BASE_URL='http://localhost:1970/api/voiture/';

export const listMarques = () =>  axios.get(REST_API_BASE_URL+"marques");
export const createMarque = (marque) => axios.post(REST_API_BASE_URL+"marque",marque);
export const getMarque = (idMarque) => axios.get(REST_API_BASE_URL+"marque/"+idMarque) ;
export const updateMarque = (marque) => axios.put(REST_API_BASE_URL+"marque",marque);
export const deleteMarque = (idMarque) => axios.delete(REST_API_BASE_URL+"marque/"+idMarque);