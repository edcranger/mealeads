import React from "react";
import { FaSearch } from "react-icons/fa";

const SimpleSearch = () => {
  const searchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={searchSubmit}>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col justify-center  md:flex-row w-full ">
          <input
            type="text"
            className="py-3 px-4 rounded md:rounded-r-none   bg-yellow-50  focus:outline-none border-2 border-blue-100 focus:border-yellow-400 "
            placeholder="Search Recipe"
          />
          <button
            className="shadow focus:outline-none bg-blue-200 hover:bg-blue-100  mx-auto md:mx-0 mt-2 md:mt-0 h-14 md:h-auto rounded-md md:rounded-l-none w-38 md:w-10"
            type="submit"
          >
            <FaSearch className="w-20 h-8 md:h-6 md:w-10 mx-auto text-blue-300" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SimpleSearch;
