import React from "react";
import RecipeListContainer from "../components/RecipeListContainer";
import SearchBar from "../components/SearchBar";

const Home = () => {
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
