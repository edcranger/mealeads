import { useState, useRef } from "react";
import { courseList, dietList, cuisineList } from "../utils/dataList";
import { useGlobalContext } from "../context/context";

const AdvanceSearch = () => {
  const { advanceSearchHandler } = useGlobalContext();
  const [query, setQuery] = useState({
    course: "",
    diet: "",
    cuisine: "",
    calories: 0,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery({ ...query, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuery = { ...query, calories: parseInt(query.calories) || 0 };
    advanceSearchHandler(newQuery);
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-1">
          <div className="flex flex-col md:flex-row md:space-x-2 ">
            <div className="py-1">
              <h1>Course:</h1>
              <select
                name="course"
                value={query.course}
                onChange={handleChange}
                className="appearance-none bg-white rounded-lg border-2 py-2 px-3 border-blue-100"
              >
                {courseList.map((course, index) => {
                  return (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="py-1">
              <h1>Diet: </h1>
              <select
                value={query.diet}
                name="diet"
                onChange={handleChange}
                className="appearance-none bg-white rounded-lg border-2 py-2 px-3  border-blue-100"
              >
                {dietList.map((diet, index) => {
                  return (
                    <option key={index} value={diet}>
                      {diet}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-2 ">
            <div className="py-1">
              <h1>Cuisine: </h1>
              <select
                value={query.cuisine}
                name="cuisine"
                onChange={handleChange}
                className="appearance-none bg-white rounded-lg border-2 py-2 px-3  border-blue-100"
              >
                {cuisineList.map((cuisine, index) => {
                  return (
                    <option key={index} value={cuisine}>
                      {cuisine}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="py-1">
              <h1> Calories: </h1>
              <input
                type="number"
                name="calories"
                onChange={handleChange}
                value={query.calories}
                className="appearance-none rounded-lg  border-2 py-2 px-3  border-blue-100 w-32"
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <button
            className="mx-auto bg-blue-200 py-1 px-2 w-20 rounded-lg shadow text-gray-600 font-semibold hover:bg-blue-100 hover:text-gray-500"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdvanceSearch;
