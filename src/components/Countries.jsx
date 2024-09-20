import React, { useEffect, useState } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const url = "https://restcountries.com/v3.1/all";

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    // console.log("data", data);
  };
  useEffect(() => {
    fetchCountryData();
  }, []);
  return (
    <section className="grid">
      {countries.map((country, index) => {
        const { name, population, region, capital, flags } = country;
        return (
          <article key={index}>
            <div>
              <img src={flags.png} alt="" />
              <div className="details">
              <h3>{name.common}</h3>
              <h4>
                Population: <span>{population}</span>
              </h4>
              <h4>
                Region: <span>{region}</span>
              </h4>
              <h4>Capital: <span>{capital}</span></h4>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Countries;
