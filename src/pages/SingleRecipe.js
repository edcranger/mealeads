import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useFetch } from "../utils/useFetch";

const SingleRecipe = () => {
  const { isLoading, isError, recipe } = useFetch("/");
  return (
    <div className="flex flex-col bg-red-100 h-full">
      <h1>Hello</h1>
    </div>
  );
};

export default SingleRecipe;
