import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import CountryDisplayShimmer from "./shimmerEffects/CountryDisplayShimmer";

const CardDisplay = ({ query, region }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        let response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, []);

  if(countries.length === 0) {
    return <CountryDisplayShimmer />
  }

  return (
    <div className="grid grid-cols-4 gap-10 min-h-lvh p-10 pt-0 max-sm:px-8 max-sm:grid-cols-1 max-lg:grid-cols-3 max-md:grid-cols-2 max-w-7xl m-auto">
      {countries
        .filter((country) => 
          country.name.common.toLowerCase().includes(query.toLowerCase())
          && country.region.toLowerCase().includes(region.toLowerCase())
        ) 
        .map((country) => (
          <Card
            key={country.name.common}
            country={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            img={country.flags.svg}
            data={country}
          />
      ))}
    </div>
  );
};

export default CardDisplay;
