import axios from "axios";

// Create an Axios instance.
const api = axios.create({
  baseURL: "http://global.sochware.com/api/",
});

export default api;
