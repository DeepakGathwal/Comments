import axios from "axios";

export const instance =  axios.create({baseURL:"https://comment-world.onrender.com/memories/"})
instance.defaults.headers.common['Content-Type'] = 'multipart/form-data';
instance.defaults.withCredentials = true;

export const imgLink = `https://comment-world.onrender.com`;


