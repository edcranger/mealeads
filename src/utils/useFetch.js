import { useState, useEffect } from "react";
import api from "../api/api";

export const useFetch = ({ url, query }) => {
  const [isLoading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const abortCtrl = new AbortController();
    (async () => {
      console.log(query);
      setIsloading(true);
      try {
        const res = await api.get(
          url,
          { params: query },
          { signal: abortCtrl.signal }
        );

        setRecipe(res.data);
        setIsloading(false);
      } catch (err) {
        setIsloading(false);
        setIsError(err.message);
        console.log(err);
      }
    })();

    return () => abortCtrl.abort();
  }, [url, query]);

  return {
    isLoading,
    isError,
    recipe,
  };
};
