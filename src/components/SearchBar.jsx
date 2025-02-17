import React from "react";

const SearchBar = ({ setQuery }) => {
  return (
    <div className="bg-gray-100 shadow-md w-[30%] dark:bg-gray-700 rounded-md px-3 flex items-center font-medium border-b border-r border-gray-400 transition-all duration-300">
      <i className="ri-search-line mr-2 dark:text-white text-gray-500"></i>
      <input
        type="text"
        placeholder="search country"
        onChange={(e) => setQuery(e.target.value)}
        className="outline-none dark:text-white w-full"
      />
    </div>
  );
};

export default SearchBar;
