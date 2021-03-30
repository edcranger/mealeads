import { useState } from "react";
import { createContext, useContext, useEffect } from "react";
import { useFetch } from "../utils/useFetch";

const defaultfetchData = {
  url: "/recipes/complexSearch",
  params: {
    number: 20,
    instructionsRequired: true,
    addRecipeInformation: true,
    addRecipeNutrition: true,
  },
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [fetchData, setFetchData] = useState(defaultfetchData);
  const { recipe } = useFetch(fetchData);
  useEffect(() => {}, []);

  return (
    <AppContext.Provider value={{ recipe }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
