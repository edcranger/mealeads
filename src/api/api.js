import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spoonacular.com",
  /* baseURL: "http://localhost:4000", */
  params: {
    apiKey: "9a13ed904f77478f90e3afc1f3b9b210",
  },
});

export default api;
