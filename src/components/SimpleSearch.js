import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

const SimpleSearch = () => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState(["wew"]);
  const [search, setSearch] = useState("");
  const searchBackRef = useRef(null);

  useEffect(() => {
    if (search.length < 1) {
      setDisplay(false);
    }
  }, [search]);

  const searchKey = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    setDisplay(true);
  };

  return (
    <form onBlur={() => setDisplay(false)}>
      <div className="flex flex-row justify-center items-center my-10">
        <div className="flex justify-center w-3/4 absolute">
          <input
            type="text"
            ref={searchBackRef}
            value={search}
            onChange={searchKey}
            className="py-3 px-4 rounded-l-lg w-full  bg-yellow-50  focus:outline-none border-2 border-blue-100 focus:border-yellow-400 "
            placeholder="Search Recipe"
          />
          <button
            className=" focus:outline-none bg-blue-200 hover:bg-blue-100  rounded-r-lg w-10 "
            type="submit"
          >
            <FaSearch className="w-10 h-6 mx-auto text-blue-300" />
          </button>
          {display && options.length !== 0 && (
            <div className=" absolute top-11 mt-2 w-full pl-2 pr-10 z-50  ">
              <ul className="bg-white shadow border-2">
                <li className=" flex items-center py-2  hover:bg-yellow-50 px-3 cursor-pointer ">
                  <img
                    src="https://spoonacular.com/recipeImages/782601-312x231.jpg"
                    alt=""
                    className="w-12 h-12"
                  />
                  <div className="flex flex-col ml-2 ">
                    <div className="font-bold text-gray-700">Name</div>
                    <div className="text-xs text-gray-500">Name</div>
                  </div>
                </li>
                <li className=" flex items-center py-2  hover:bg-yellow-50 px-3 cursor-pointer ">
                  <img
                    src="https://spoonacular.com/recipeImages/782601-312x231.jpg"
                    alt=""
                    className="w-12 h-12"
                  />
                  <div className="flex flex-col ml-2 ">
                    <div className="font-bold text-gray-700">Name</div>
                    <div className="text-xs text-gray-500">Name</div>
                  </div>
                </li>
                <li className=" flex items-center py-2  hover:bg-yellow-50 px-3 cursor-pointer ">
                  <img
                    src="https://spoonacular.com/recipeImages/782601-312x231.jpg"
                    alt=""
                    className="w-12 h-12"
                  />
                  <div className="flex flex-col ml-2 ">
                    <div className="font-bold text-gray-700">Name</div>
                    <div className="text-xs text-gray-500">Name</div>
                  </div>
                </li>
                <li className=" flex items-center py-2  hover:bg-yellow-50 px-3 cursor-pointer ">
                  <img
                    src="https://spoonacular.com/recipeImages/782601-312x231.jpg"
                    alt=""
                    className="w-12 h-12"
                  />
                  <div className="flex flex-col ml-2 ">
                    <div className="font-bold text-gray-700">Name</div>
                    <div className="text-xs text-gray-500">Name</div>
                  </div>
                </li>
                <li className=" flex items-center py-2  hover:bg-yellow-50 px-3 cursor-pointer ">
                  <img
                    src="https://spoonacular.com/recipeImages/782601-312x231.jpg"
                    alt=""
                    className="w-12 h-12"
                  />
                  <div className="flex flex-col ml-2 ">
                    <div className="font-bold text-gray-700">Name</div>
                    <div className="text-xs text-gray-500">Name</div>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default SimpleSearch;
