import axios from "axios";

const REST_API_BASE_URL='http://localhost:1970/api/voiture/';

export const listAnnonceValider = () =>  axios.get(REST_API_BASE_URL+"annonces/5");
export const validerAnnonce = (idannonce) => axios.put(REST_API_BASE_URL+"annonce/valider/"+idannonce) ;
// export const updateannonce = (annonce) => axios.put(REST_API_BASE_URL+"annonce",annonce);