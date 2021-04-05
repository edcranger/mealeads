import React from "react";
import RecipeCard from "./RecipeCard";
import { useGlobalContext } from "../context/context";

const RecipeListContainer = () => {
  const { isLoading, recipe } = useGlobalContext();

  if (isLoading) {
    return <h1 className="text-3xl font-semibold">Loading...</h1>;
  }

  return (
    <section className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {recipe.map((item) => (
        <RecipeCard key={item.id} {...item} />
      ))}
    </section>
  );
};

export default RecipeListContainer;
