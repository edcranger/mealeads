import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeListContainer = () => {
  return (
    <section className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </section>
  );
};

export default RecipeListContainer;
