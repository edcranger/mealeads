import React, { useState } from "react";

import AdvanceSearch from "./AdvanceSearch";
import SimpleSearch from "./SimpleSearch";

const SearchBar = () => {
  const [isAdvanceSearch, setIsAdvanceSearch] = useState(false);

  return (
    <div className="py-5  ">
      {isAdvanceSearch ? <AdvanceSearch /> : <SimpleSearch />}
      <div className=" py-1 w-full text-center">
        <a
          onClick={() => setIsAdvanceSearch(!isAdvanceSearch)}
          className="text-yellow-700 w-60 cursor-pointer"
        >
          {isAdvanceSearch ? "Name Search" : "Advance Search"}
        </a>
      </div>
    </div>
  );
};

export default SearchBar;
