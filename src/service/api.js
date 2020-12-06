import axios from 'axios';

const api = axios.create({
  baseURL: "https://4b0b14548403.ngrok.io"
})

export default api;
