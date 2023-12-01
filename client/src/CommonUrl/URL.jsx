import axios from "axios";

export const instance =  axios.create({baseURL:"http://localhost:8080/memories/"})
instance.defaults.headers.common['Content-Type'] = 'multipart/form-data';
instance.defaults.withCredentials = true;

export const imgLink = `http://localhost:8080`;


