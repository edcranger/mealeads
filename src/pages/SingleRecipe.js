import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../utils/useFetch";
import { ImClock } from "react-icons/im";
import { FaPercent, FaHeartbeat } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";

const SingleRecipe = () => {
  const { id } = useParams();
  const summaryContainer = useRef(null);
  const { isLoading, recipe } = useFetch({
    url: `/complexSearch/${id}`,
  });

  const {
    title,
    image,
    summary,
    healthScore,
    nutrition,
    servings,
    readyInMinutes,
    diets,
  } = recipe;

  useEffect(() => {
    setTimeout(() => {
      summaryContainer.current.innerHTML = summary;
    }, 1000);

    return () => {};
  }, [summary]);

  if (isLoading) {
    return (
      <h1 className="text-3xl font-semibold tracking-wider">Loading...</h1>
    );
  }

  return (
    <div className="  h-full">
      <div className="flex flex-col justify-center mt-8">
        <div className="features mx-auto flex mt-4 space-x-4">
          <div className="text-center">
            <FaHeartbeat className="h-7 w-7 mx-auto text-green-500" />
            <h1>{healthScore} Health score</h1>
          </div>
          <div>
            <FaPercent className="h-7 w-7 mx-auto text-red-500" />
            {<h1>{parseInt(nutrition.nutrients[0].amount)} Calories</h1>}
          </div>
          <div>
            <HiOutlineUserGroup className="h-7 w-7 mx-auto text-yellow-500" />
            <h1>{parseInt(servings)} Servings</h1>
          </div>
          <div>
            <ImClock className="h-7 w-7  mx-auto text-blue-500" />
            <h1>{parseInt(readyInMinutes)} Minutes</h1>
          </div>
        </div>
        <div className="img-container mx-auto mt-5">
          <img
            src={image}
            alt={title}
            className="object-cover border-4 border-yellow-600 rounded-xl  h-60 w-72 md:h-72 md:w-96"
          />
        </div>

        <div className="title-container text-center my-5">
          <h1 className=" text-gray-700 text-xl md:text-3xl font-semibold tracking-wider">
            {title}
          </h1>
        </div>

        <div className="summary-container bg-gray-20 text-justify">
          <p className="bg-yellow-50 py-2 px-4 mt" ref={summaryContainer}>
            <div className="text-center h-60 flex flex-col items-center justify-center">
              <p>LOADING...</p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
