import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import { useFetch } from "../utils/useFetch";
import { initialState, reducer } from "../context/reducer";
import api from "../api/api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchQuery, setSearchQuery] = useState({});


  useEffect(() => {
    
  }, []);

  const advanceSearchHandler = (query) => {
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
