import React, { useState } from "react";

import AdvanceSearch from "./AdvanceSearch";
import SimpleSearch from "./SimpleSearch";

const SearchBar = () => {
  const [isAdvanceSearch, setIsAdvanceSearch] = useState(true);

  return (
    <div className="py-5">
      {isAdvanceSearch ? <AdvanceSearch /> : <SimpleSearch />}
      <div className=" py-1 w-full text-center">
        <div
          onClick={() => setIsAdvanceSearch(!isAdvanceSearch)}
          className="text-yellow-700 w-full cursor-pointer"
        >
          {isAdvanceSearch ? "Name Search" : "Advance Search"}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
