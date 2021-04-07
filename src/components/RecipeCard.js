import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const RecipeCard = ({
  id,
  image,
  title,
  readyInMinutes,
  nutrition,
  summary,
}) => {
  const { name, amount } = nutrition.nutrients[0];
  const history = useHistory();

  return (
    <article className="flex flex-col shadow-md hover:shadow-2xl border-2 hover: border-gray-200 rounded-md bg-white max-h-96 transition duration-500 ease-in-out   transform hover:-translate-y-1 hover:scale-105 ...">
      <div className=" ">
        <div className="img-container relative">
          <div className="absolute rounded-md bg-green-100 opacity-80 top-2 left-1 p-1 flex items-center">
            <BiTimeFive className="inline" />
            <span className="ml-1 font-semibold text-gray-600">
              {readyInMinutes} mins
            </span>
          </div>
          <img src={image} alt={title} className="object-cover w-full h-52" />
          <div className="text-gray-600 bg-yellow-200 rounded-md p-1 absolute -bottom-3 right-2 font-bold">
            {name}:{" "}
            <span className="text-yellow-600 font-bold">
              {parseInt(amount)}{" "}
            </span>
          </div>
        </div>
        <div className="text-container py-2 px-3 h-20">
          <div className="flex justify-between py-2">
            <h1 className="font-medium text-md text-gray-600 tracking-wide">
              {title}
            </h1>
          </div>
        </div>
        <button
          className="bg-green-500 hover:bg-green-200 hover:text-green-500 px-2 font-semibold py-2 m-2 rounded-lg  text-white "
          onClick={() => history.push(`/recipe/profile/${id}`)}
        >
          Details
        </button>
      </div>
    </article>
  );
};

export default RecipeCard;
