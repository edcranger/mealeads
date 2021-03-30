import React from "react";
import Navbar from "../components/Navbar";
import RecipeListContainer from "../components/RecipeListContainer";
import SearchBar from "../components/SearchBar";
import { useGlobalContext } from "../context/context";

const Home = () => {
  const { recipe } = useGlobalContext();
  console.log(recipe);

  return (
    <div className="">
      <SearchBar />

      <div className="w-full">
        <RecipeListContainer />
      </div>
    </div>
  );
};

export default Home;
