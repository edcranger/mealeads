import { useState } from "react";
import { courseList, dietList, cuisineList } from "../utils/dataList";
import { useGlobalContext } from "../context/context";

const AdvanceSearch = () => {
  const { advanceSearchHandler } = useGlobalContext();
  const [query, setQuery] = useState({
    course: " ",
    diet: " ",
    cuisine: " ",
    calories: 0,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery({ ...query, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    advanceSearchHandler(query);
  };

  return (
    <div className="flex justify-center items-center">
      <form className="grid grid-cols-2 gap-10">
        <div className="flex flex-col ">
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

        <div className="flex flex-col">
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
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default AdvanceSearch;
