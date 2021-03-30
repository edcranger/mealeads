import { useState, useEffect } from "react";
import api from "../api/api";

export const useFetch = ({ url, params }) => {
  const [isLoading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [recipe, setRecipe] = useState([]);

  const fetchRecipe = async () => {
    setIsloading(true);
    console.log("wew:", params);
    try {
      const res = await api.get(url, { params });
      setRecipe(res.data);
      setIsloading(false);
    } catch (err) {
      setIsloading(false);
      setIsError(err.message);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, [url]);

  return {
    isLoading,
    isError,
    recipe,
  };
};
