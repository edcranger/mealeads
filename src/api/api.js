import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spoonacular.com",
  params: {
    apiKey: "9a13ed904f77478f90e3afc1f3b9b210",
    number: 20,
    instructionsRequired: true,
    addRecipeInformation: true,
    addRecipeNutrition: true,
    sort: "random",
  },
});

export default api;
