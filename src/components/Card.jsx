import React from "react";
import {Link} from "react-router-dom"

const Card = ({ country, population, region, capital, img, data }) => {
  return (  
    <Link to={`/${country}`} state={data}>
      <div className="w-64 rounded-md shadow-md overflow-hidden m-auto hover:cursor-pointer hover:scale-105 transition-transform duration-300 dark:bg-gray-800  dark:border-gray-500 border-b border-r border-gray-300">
        <img
          src={img}
          alt={country + " flag"}
          className="h-40 w-full object-cover shadow-md"
        />
        <div className="text-left p-4 dark:text-gray-300">
          <h1 className="font-medium text-xl mb-1 dark:text-white">{country.length > 20 ? country.slice(0, 20) + "..." : country}</h1>
          <p><i className="ri-group-3-fill"></i> : {population.toLocaleString("en-US")}</p>
          <p><i className="ri-earth-fill"></i> : {region}</p>
          <p><i className="ri-map-pin-2-fill"></i> : {capital}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
