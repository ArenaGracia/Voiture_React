import axios from 'axios';

const REST_API_BASE_URL = 'https://voiture-production-524c.up.railway.app/api/voiture/';

const login = (vprofil) => axios.post(REST_API_BASE_URL+"login",vprofil);

const deconnect = () => {
  sessionStorage.removeItem('token');
  sessionStorage.clear();
};

const getAuthToken = () => {
  return sessionStorage.getItem('token');
};

const isAuthenticated = () => {
  const token = getAuthToken();
  return token !== null;
};

export { login, deconnect, isAuthenticated, getAuthToken };
