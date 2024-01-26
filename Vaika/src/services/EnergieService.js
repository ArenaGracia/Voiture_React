import axios from "axios";

const REST_API_BASE_URL='http://voiture-production-524c.up.railway.app/api/voiture/';

export const listEnergies = () =>  axios.get(REST_API_BASE_URL+"energies");
export const createEnergie = (energie) => axios.post(REST_API_BASE_URL+"energie",energie);
export const getEnergie = (idEnergie) => axios.get(REST_API_BASE_URL+"energie/"+idEnergie) ;
export const updateEnergie = (energie) => axios.put(REST_API_BASE_URL+"energie",energie);
export const deleteEnergie = (idEnergie) => axios.delete(REST_API_BASE_URL+"energie/"+idEnergie);