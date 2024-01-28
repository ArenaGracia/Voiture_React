import axios from "axios";

const REST_API_BASE_URL='https://voiture-production-524c.up.railway.app/api/voiture/';

export const listAnnonceValider = () =>  axios.get(REST_API_BASE_URL+"annonce/validation");
export const validerAnnonce = (idannonce) => axios.put(REST_API_BASE_URL+"annonce/validation/"+idannonce) ;
// export const updateannonce = (annonce) => axios.put(REST_API_BASE_URL+"annonce",annonce);