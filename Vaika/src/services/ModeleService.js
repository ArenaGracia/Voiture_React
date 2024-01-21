import axios from "axios";

const REST_API_BASE_URL='http://localhost:1970/api/voiture/';

export const listModeles = () =>  axios.get(REST_API_BASE_URL+"modeles");
export const createModele = (modele) => axios.post(REST_API_BASE_URL+"modele",modele);
export const getModele = (idModele) => axios.get(REST_API_BASE_URL+"modele/"+idModele) ;
export const updateModele = (modele) => axios.put(REST_API_BASE_URL+"modele",modele);
export const deleteModele = (idModele) => axios.delete(REST_API_BASE_URL+"modele/"+idModele);