import React from "react";
import { FaSearch } from "react-icons/fa";

const SimpleSearch = () => {
  const searchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={searchSubmit}>
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center md:flex-row w-full ">
          <input
            type="text"
            className="py-3 px-4 bg-yellow-50  focus:outline-none border-2 border-blue-100 focus:border-yellow-400 rounded-l-lg  "
            placeholder="Search Recipe"
          />

          <button className="bg-blue-100 rounded-r-lg " type="submit">
            <FaSearch className="w-10 mx-auto" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SimpleSearch;
