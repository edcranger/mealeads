import React from "react";
import { BiTimeFive } from "react-icons/bi";

const RecipeCard = () => {
  return (
    <article className="shadow  bg-white">
      <div className="img-container relative">
        <div className="absolute bg-green-100 opacity-80 top-2 left-1 p-1 flex items-center">
          <BiTimeFive className="inline" />
          <span>30 mins</span>
        </div>
        <img
          src="https://speedyrecipe.com/wp-content/uploads/2019/05/How-to-Cook-Bicol-Express-500x375.jpg"
          alt="bicol"
          className="object-cover w-full h-52"
        />
        <div className="text-gray-800 bg-yellow-200 rounded-md p-1 absolute -bottom-3 right-2">
          Calories:
          <span className="text-yellow-600"> 3000</span>
        </div>
      </div>
      <div className="text-container py-2 px-3">
        <div className="flex justify-between">
          <h1>Bicol Express ni Eds</h1>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          perferendis
        </p>
      </div>
    </article>
  );
};

export default RecipeCard;
