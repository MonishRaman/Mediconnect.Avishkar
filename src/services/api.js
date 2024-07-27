import axios from 'axios';

// Set up your base URL and other configurations for axios
axios.defaults.baseURL = 'http://your-server-url/api';

export const login = (username, password) => {
  return axios.post('/login', { username, password });
};

export const fetchHospitals = () => {
  return axios.get('/hospitals');
};

export const fetchDoctors = (hospitalId) => {
  return axios.get(`/hospitals/${hospitalId}/doctors`);
};
