import axios from "axios";
import { getAuthToken } from "./AuthService";

const REST_API_BASE_URL='https://voiture-production-524c.up.railway.app/api/voiture/';

let token=getAuthToken();
console.log(token)



export const listModeTransmissions = () =>  
    axios.get(
        REST_API_BASE_URL+"modeTransmissions",
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const createModeTransmission = (modeTransmission) => 
    axios.post(
        REST_API_BASE_URL+"modeTransmission",
        modeTransmission,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const getModeTransmission = (idModeTransmission) => 
    axios.get(
        REST_API_BASE_URL+"modeTransmission/"+idModeTransmission,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
) ;

export const updateModeTransmission = (ModeTransmission) => 
    axios.put(
        REST_API_BASE_URL+"modeTransmission",
        ModeTransmission,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);

export const deleteModeTransmission = (idModeTransmission) => 
    axios.delete(
        REST_API_BASE_URL+"modeTransmission/"+idModeTransmission,
        { headers: { 'Authorization':  `Bearer ${token} ` } }
);