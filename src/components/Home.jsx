import React, { useState } from "react";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import CardDisplay from "./CardDisplay";

const Home = () => {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  return (
    <main className="dark:bg-gray-900 transition-all duration-300">
      <div className="flex justify-between gap-5 p-10 max-sm:flex-col max-sm:p-8 max-w-7xl m-auto">
        <SearchBar setQuery={setQuery} />
        <Dropdown setRegion={setRegion} />
      </div>
      <CardDisplay query={query} region={region}/>
    </main>
  );
};

export default Home;
