import axios from "axios";

const REST_API_BASE_URL='http://localhost:1970/api/voiture/';

export const listCouleurs = () =>  axios.get(REST_API_BASE_URL+"couleurs");
export const createCouleur = (couleur) => axios.post(REST_API_BASE_URL+"couleur",couleur);
export const getCouleur = (idCouleur) => axios.get(REST_API_BASE_URL+"couleur/"+idCouleur) ;
export const updateCouleur = (couleur) => axios.put(REST_API_BASE_URL+"couleur",couleur);
export const deleteCouleur = (idCouleur) => axios.delete(REST_API_BASE_URL+"couleur/"+idCouleur);