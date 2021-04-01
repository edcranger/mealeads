import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import api from "../api/api";
import { initialState, reducer } from "../context/reducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchQuery, setSearchQuery] = useState({});

  const queryParams = {
    number: 20,
    addRecipeNutrition: true,
    sort: "random",
  };

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const res = await api.get("/recipes/complexSearch", {
      params: { ...queryParams, ...searchQuery },
    });
    dispatch({ type: "FETCH_RECIPE", payload: res.data });
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const advanceSearchHandler = (query) => {
    console.log(query);
    setSearchQuery(query);
  };

  return (
    <AppContext.Provider value={{ ...state, advanceSearchHandler }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
