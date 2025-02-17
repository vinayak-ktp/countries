import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import CountryDisplayShimmer from "./CountryDisplayShimmer";

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
    <div className=" flex flex-wrap gap-10 min-h-lvh justify-around px-10">
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
