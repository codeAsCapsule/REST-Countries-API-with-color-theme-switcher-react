import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const Filter = () => {
  const regions = [
    {
      name: "Filter by region",
      desc: "All",
    },
    {
      name: "Africa",
      desc: "Africa",
    },
    {
      name: "Americas",
      desc: "Americas",
    },
    {
      name: "Asia",
      desc: "Asia",
    },
    {
      name: "Europe",
      desc: "Europe",
    },
    {
      name: "Oceania",
      desc: "Oceania",
    },
  ];

  const filterRegions = async (region) => {
    const url = `https://restcountries.com/v3.1/region/${region}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  };
  useEffect(() => {
    filterRegions();
  }, []);
  return (
    <div className="filter">
      <form className="form-control">
        <FaSearch className="search-icon" />
        <input
          type="search"
          name="search"
          placeholder="Search for a county"
        ></input>
      </form>

      <div className="region-filter">
        <select
          className="select"
          name="select"
          onChange={(e) => filterRegions(e.target.value)}
          value={regions.desc}
        >
          <option value="Filter by region">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
