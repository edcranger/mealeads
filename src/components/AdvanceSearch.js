import React from "react";

const AdvanceSearch = () => {
  return (
    <form className="grid grid-cols-2 gap-10">
      <div className="flex flex-col ">
        <div className="py-1">
          <h1>Course:</h1>
          <select className="appearance-none bg-white rounded-lg border-2 py-2 px-3 border-blue-100">
            <option value="" disabled>
              Course Type
            </option>
            <option value="ew">Breakfast</option>
            <option value="ew">Lunch</option>
            <option value="ew">Dinner</option>
            <option value="ew">Snack</option>
          </select>
        </div>
        <div className="py-1">
          <h1>Diet: </h1>
          <select className="appearance-none bg-white rounded-lg border-2 py-2 px-3  border-blue-100">
            <option value="ew">Any</option>
            <option value="ew">Vegan</option>
            <option value="ew">Ketogenic</option>
            <option value="ew">Patay Guts</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="py-1">
          <h1>Cuisine: </h1>
          <select className="appearance-none bg-white rounded-lg border-2 py-2 px-3  border-blue-100">
            <option value="ew">All</option>
            <option value="ew">Japanese</option>
            <option value="ew">Korean</option>
            <option value="ew">Italian</option>
            <option value="ew">American</option>
          </select>
        </div>
        <div className="py-1">
          <h1> Calories: </h1>
          <input
            type="number"
            className="appearance-none rounded-lg  border-2 py-2 px-3  border-blue-100 w-32"
          />
        </div>
      </div>
    </form>
  );
};

export default AdvanceSearch;
