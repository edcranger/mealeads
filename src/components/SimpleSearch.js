import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import api from "../api/api";

const SimpleSearch = () => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const searchBackRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const abrtCTRL = new AbortController();

    if (search.length < 1) {
      setDisplay(false);
    }
    const searchHandler = async () => {
      try {
        const res = await api.get(`/recipes/autocomplete?query=${search}`, {
          signal: abrtCTRL.signal,
        });
        setOptions(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    searchHandler();

    return () => abrtCTRL.abort();
  }, [search]);

  const searchKey = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    setDisplay(true);
  };

  return (
    <form onBlur={() => setDisplay(false)}>
      <div className="flex flex-row justify-center items-center ">
        <div className="flex justify-center w-3/4 relative">
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
                {options.map((opt) => {
                  const { id, title, imageType } = opt;
                  return (
                    <li
                      key={id}
                      className=" flex items-center py-2  hover:bg-yellow-50 px-3 cursor-pointer "
                      onMouseDown={() => history.push(`/recipe/profile/${id}`)}
                    >
                      <img
                        src={`https://spoonacular.com/recipeImages/${id}-312x231.${imageType}`}
                        alt=""
                        className="w-12 h-12"
                      />
                      <div className="flex flex-col ml-2 ">
                        <div className="font-bold text-gray-700">{title}</div>
                        <div className="text-xs text-gray-500">Name</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default SimpleSearch;
