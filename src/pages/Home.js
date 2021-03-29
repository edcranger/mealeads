import React from "react";
import Navbar from "../components/Navbar";
import RecipeListContainer from "../components/RecipeListContainer";
import SearchBar from "../components/SearchBar";
import { useGlobalContext } from "../context/context";

const Home = () => {
  const { eds } = useGlobalContext();
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
