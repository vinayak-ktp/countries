import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import CountryPageShimmer from "./CountryPageShimmer";

const CountryPage = () => {
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  // const searchParams = new URLSearchParams(window.location.search);
  // const countryName = searchParams.get('name');

  const params = useParams();
  const countryName = params.country;

  const { state } = useLocation();
  // console.log(state);

  const updateCountryData = (data) => {
    setCountryData({
      flag: data.flags.svg,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population.toLocaleString("en-US"),
      region: data.region,
      capital: data.capital,
      currencies: Object.values(data.currencies)
        .map((currency) => currency.name)
        .join(", "),
      languages: Object.values(data.languages).join(", "),
      borderCountries: [],
    });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((countryCode) => {
        return axios
          .get(`https://restcountries.com/v3.1/alpha/${countryCode}`)
          .then((response) => response.data[0])
          .then((data) => data.name.common);
      })
    ).then((borders) => {
      setCountryData((prevState) => {
        return {
          ...prevState,
          borderCountries: borders,
        };
      });
    });
  };

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }
    axios
      .get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((response) => response.data[0])
      .then((data) => { 
        updateCountryData(data);
      })
      .catch((error) => {
        console.error(error);
        setNotFound(true);
      });
  }, [countryName]);
  
  if (notFound) {
    return <h1>Data Not Found!</h1>;
  }

  return countryData ? (
    <div className="p-10 dark:bg-gray-900 fh_minus_header">
      <button
        onClick={() => history.back()}
        className="py-1 pl-3 pr-4 rounded-md border border-gray-500 hover:bg-gray-300 bg-gray-200 transition-colors duration-200 dark:bg-gray-700 dark:text-white"
      >
        <i className="ri-arrow-left-line"></i> Back
      </button>
      <div className="flex justify-center mt-20 mx-auto text-md h-auto">
        <img
          src={countryData.flag}
          alt={countryName + " flag"}
          className="w-[40%] rounded-xl my-auto shadow border-2 dark:border-white"
        />
        <div className="flex flex-col ml-10 gap2 text-gray-600 max-w-[30%] dark:text-gray-300">
          <h1 className="font-bold text-3xl mb-4 text-black dark:text-gray-200 underline">
            {countryName.toUpperCase()}
          </h1>
          <h3>
            <b>Native Name:</b> {countryData.nativeName}
          </h3>
          <h3>
            <b>Population:</b> {countryData.population}
          </h3>
          <h3>
            <b>Region:</b> {countryData.region}
          </h3>
          <h3>
            <b>Capital:</b> {countryData.capital.join(", ")}
          </h3>
          <h3>
            <b>Currencies:</b> {countryData.currencies}
          </h3>
          <h3>
            <b>Languages:</b> {countryData.languages}
          </h3>
          {countryData.borderCountries.length ? (
            <h3 className="flex flex-wrap mt-5">
              <b>Border:</b>{" "}
              {countryData.borderCountries.map((country, idx) => (
                <Link
                  key={idx}
                  className="px-2 rounded m-1 border text-sm border-gray-500 hover:bg-gray-300 transition-colors duration-200 dark:text-white"
                  to={`/${country}`}
                >
                  {country}
                </Link>
              ))}
            </h3>
          ) : null}
        </div>
      </div>
    </div>
  ) : (
    <CountryPageShimmer />
  );
};

export default CountryPage;
