import React, { useState } from "react";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import CardDisplay from "./CardDisplay";

const Home = () => {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  return (
    <main className="dark:bg-gray-900">
      <div className="flex justify-between p-10">
        <SearchBar setQuery={setQuery} />
        <Dropdown setRegion={setRegion} />
      </div>
      <CardDisplay query={query} />
    </main>
  );
};

export default Home;
