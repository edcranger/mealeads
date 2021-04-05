import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";

const RecipeCard = ({
  id,
  image,
  title,
  readyInMinutes,
  nutrition,
  summary,
}) => {
  const { name, amount } = nutrition.nutrients[0];

  return (
    <article className="flex flex-col shadow bg-white">
      <div className="container h-72">
        <div className="img-container relative">
          <div className="absolute bg-green-100 opacity-80 top-2 left-1 p-1 flex items-center">
            <BiTimeFive className="inline" />
            <span>{readyInMinutes}</span>
          </div>
          <img src={image} alt={title} className="object-cover w-full h-52" />
          <div className="text-gray-800 bg-yellow-200 rounded-md p-1 absolute -bottom-3 right-2">
            {name}: <span className="text-yellow-600">{parseInt(amount)} </span>
          </div>
        </div>
        <div className="text-container py-2 px-3">
          <div className="flex justify-between py-2">
            <h1 className="font-semibold text-md">{title}</h1>
          </div>
        </div>
      </div>
      <div>
        <hr />

        {id && (
          <Link className="bg-blue-100 " to={`/recipe/profile/${id}`}>
            Check Details
          </Link>
        )}
      </div>
    </article>
  );
};

export default RecipeCard;
