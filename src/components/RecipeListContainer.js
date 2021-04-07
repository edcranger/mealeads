import React from "react";
import RecipeCard from "./RecipeCard";
import { RotateSpinner } from "react-spinners-kit";
import { useGlobalContext } from "../context/context";

const RecipeListContainer = () => {
  const { isLoading, recipe } = useGlobalContext();

  if (isLoading) {
    return (
      <section className="flex justify-center mt-20 ">
        <RotateSpinner size={200} className="mx-auto" />
      </section>
    );
  }

  return (
    <section className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {recipe.results.map((item) => (
        <RecipeCard key={item.id} {...item} />
      ))}
    </section>
  );
};

export default RecipeListContainer;
