import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../utils/useFetch";
import { ImClock } from "react-icons/im";
import { FaHeartbeat } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RotateSpinner } from "react-spinners-kit";
import DOMpurify from "dompurify";

const SingleRecipe = () => {
  const { id } = useParams();
  const { isLoading, recipe } = useFetch({
    url: `/recipes/${id}/information`,
  });
  const [instructions, setInstructions] = useState([]);
  const [equipments, setEquiptments] = useState([]);

  const {
    title,
    image,
    summary,
    healthScore,
    extendedIngredients,
    servings,
    readyInMinutes,
    analyzedInstructions,
  } = recipe;

  useEffect(() => {
    if (analyzedInstructions && analyzedInstructions.length > 0) {
      setInstructions(analyzedInstructions[0].steps);
    }
  }, [analyzedInstructions]);

  useEffect(() => {
    const filteredEquipment = instructions.reduce((acc, cur) => {
      cur.equipment.map((equip) => {
        const { id, image, name } = equip;
        acc.push({ id, image, name });
      });
      return acc;
    }, []);
    const filt = [
      ...new Set(filteredEquipment.map((o) => JSON.stringify(o))),
    ].map((string) => JSON.parse(string));
    setEquiptments(filt);
  }, [instructions]);

  if (isLoading) {
    return (
      <section className="flex justify-center mt-20 ">
        <RotateSpinner size={200} className="mx-auto" />
      </section>
    );
  }

  return (
    <div className="  h-full">
      <div className="flex flex-col justify-center mt-8">
        <div className="features mx-auto flex mt-4 space-x-5 rounded-lg bg-green-100 p-3 opacity-90">
          <div className="text-center">
            <FaHeartbeat className="h-7 w-7 mx-auto text-green-500" />
            <h1 className="text-xs md:text-md font-semibold">
              {healthScore} Healthscore
            </h1>
          </div>

          <div>
            <HiOutlineUserGroup className="h-7 w-7 mx-auto text-yellow-500" />
            <h1 className="text-xs md:text-md font-semibold text-center">
              {parseInt(servings)} Servings
            </h1>
          </div>
          <div>
            <ImClock className="h-7 w-7  mx-auto text-blue-500" />
            <h1 className="text-xs md:text-md font-semibold text-center">
              {parseInt(readyInMinutes)} Minutes
            </h1>
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

        <div className="summary-container border-2 rounded-md shadow border-green-200 bg-gray-20 text-justify ">
          <p
            className="bg-green-50 rounded-lg py-2 px-4 mt tracking-wide text-gray-600"
            dangerouslySetInnerHTML={{ __html: DOMpurify.sanitize(summary) }}
          ></p>
        </div>

        <div className="ing-steps-container grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="ingredients-container bg-gray-20 text-justify mt-4 flex flex-col md:flex-row">
            <div className="ingredients-cont flex flex-col">
              <h1 className="text-2xl font-bold text-gray-700 mb-3">
                Ingredients and Equipment
              </h1>
              {extendedIngredients.map((ing) => {
                const { id, original, image } = ing;
                return (
                  <div key={id} className="flex items-center space-x-3 my-1">
                    <img
                      src={`https://spoonacular.com/cdn/ingredients_100x100/${image}`}
                      alt="patata"
                      className=" w-16 h-16"
                    />
                    <p>{original}</p>
                  </div>
                );
              })}

              {equipments.map((equip) => {
                const { id, name, image } = equip;
                return (
                  <div key={id} className="flex items-center space-x-3 my-1">
                    <img
                      src={`https://spoonacular.com/cdn/equipment_100x100/${image}`}
                      alt="patata"
                      className="w-16 h-16"
                    />
                    <p>{name}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="steps-container mt-4">
            <h1 className="text-2xl font-bold text-gray-700 mb-2">Steps</h1>
            <div className="flex flex-col">
              {instructions.length < 1 ? (
                <h1 className="text-lg font-semibold text-gray-700 my-10">
                  No steps recorded on file.
                </h1>
              ) : (
                <div>
                  {instructions.map((list) => {
                    const { number, step } = list;
                    return (
                      <div key={number} className="flex  my-3 space-x-2">
                        <div>
                          <p className="bg-yellow-500 text-white rounded-full w-6 text-center">
                            {number}
                          </p>
                        </div>
                        <div>
                          <p>{step}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
