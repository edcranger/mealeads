import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import AdvanceSearch from "./AdvanceSearch";

const SearchBar = () => {
  const [isAdvanceSearch, setIsAdvanceSearch] = useState(true);

  const searchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="py-5">
      <form onSubmit={searchSubmit}>
        <div className="flex flex-col items-center">
          {isAdvanceSearch ? (
            <AdvanceSearch />
          ) : (
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
          )}

          <div className=" py-1 w-full text-center">
            <a
              onClick={() => setIsAdvanceSearch(!isAdvanceSearch)}
              className="text-yellow-700 w-full"
            >
              {isAdvanceSearch ? "Name Search" : "Advance Search"}
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
