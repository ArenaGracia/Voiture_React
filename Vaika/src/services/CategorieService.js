import axios from "axios";

const REST_API_BASE_URL='http://localhost:1970/api/voiture/';

export const listCategories = () =>  axios.get(REST_API_BASE_URL+"categories");
export const createCategorie = (categorie) => axios.post(REST_API_BASE_URL+"categorie",categorie);
export const getCategorie = (idCategorie) => axios.get(REST_API_BASE_URL+"categorie/"+idCategorie) ;
export const updateCategorie = (categorie) => axios.put(REST_API_BASE_URL+"categorie",categorie);
export const deleteCategorie = (idCategorie) => axios.delete(REST_API_BASE_URL+"categorie/"+idCategorie);