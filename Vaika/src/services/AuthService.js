import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:1970/api/project/';

const login = (admin) => axios.post(REST_API_BASE_URL+"login",admin);

const logout = () => {
  sessionStorage.removeItem('token');
};

const getAuthToken = () => {
  return sessionStorage.getItem('token');
};

const isAuthenticated = () => {
  const token = getAuthToken();
  return token !== null;
};

export { login, logout, isAuthenticated };
