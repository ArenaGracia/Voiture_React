import axios from "axios";

const REST_API_BASE_URL='http://localhost:1970/api/voiture/';

export const listModeleTransmissions = () =>  axios.get(REST_API_BASE_URL+"modeleTransmissions");
export const createModeleTransmission = (modeleTransmission) => axios.post(REST_API_BASE_URL+"modeleTransmission",modeleTransmission);
export const getModeleTransmission = (idmodeleTransmission) => axios.get(REST_API_BASE_URL+"modeleTransmission/"+idmodeleTransmission) ;
export const updateModeleTransmission = (modeleTransmission) => axios.put(REST_API_BASE_URL+"modeleTransmission",modeleTransmission);
export const deleteModeleTransmission = (idmodeleTransmission) => axios.delete(REST_API_BASE_URL+"modeleTransmission/"+idmodeleTransmission);