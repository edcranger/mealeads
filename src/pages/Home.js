import React from "react";
import RecipeListContainer from "../components/RecipeListContainer";
import SearchBar from "../components/SearchBar";
import { useGlobalContext } from "../context/context";

const Home = () => {
  const { recipe } = useGlobalContext();

  return (
    <div>
      <SearchBar />

      <div className="w-full">
        <RecipeListContainer />
      </div>
    </div>
  );
};

export default Home;
