import React, { useEffect, useState } from "react";
import "./style.css";
import movieData from "../../Data/movieData";
import CustomDropdown from "../../Components/CustomDropdown/Customdropdown";
import Rating from "../../Components/Rating/rating";
import FilteredListView from "../../Components/FilteredListView/FilteredListView";

const ratingOptions = [
  { label: "Any Rating", value: "any" },
  { label: <Rating rating={1} />, value: 1 },
  { label: <Rating rating={2} />, value: 2 },
  { label: <Rating rating={3} />, value: 3 },
  { label: <Rating rating={4} />, value: 4 },
  { label: <Rating rating={5} />, value: 5 },
  { label: <Rating rating={6} />, value: 6 },
  { label: <Rating rating={7} />, value: 7 },
  { label: <Rating rating={8} />, value: 8 },
  { label: <Rating rating={9} />, value: 9 },
  { label: <Rating rating={10} />, value: 10 },
];

const labelOptions = [
  { label: "Any Genre", value: "any" },
  { label: "Action", value: "action" },
  { label: "Comedy", value: "comedy" },
  { label: "Drama", value: "drama" },
  { label: "Thriller", value: "thriller" },
];

const Homepage = () => {
  const [filters, setFilters] = useState({
    searchValue: "",
    rating: [],
    category: [],
  });
  const [isFocused, setIsFocused] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    const newData = movieData.filter((value) => {
      return (
        value?.title
          ?.toLowerCase()
          .includes(filters?.searchValue?.toLowerCase().trim()) &&
        (filters.category.length === 0 ||
          filters.category.includes("any") ||
          filters.category.includes(value.category?.toLowerCase())) &&
        (filters.rating.length === 0 ||
          filters.rating.includes("any") ||
          filters.rating.includes(Math.floor(value.rating)))
      );
    });
    setFilteredData(newData);
  }, [filters]);

  return (
    <div>
      <div className="d-flex input-wrapper">
        <div className="primary-input flex-1 search-wrapper padding-block-0">
          <input
            type="text"
            placeholder="Enter movie name"
            name="searchValue"
            value={filters.searchValue}
            onChange={handleChange}
            className="input-field w-100 h-100"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {filteredData.length > 0 &&
            (filters.searchValue.trim() || isFocused) && (
              <div className="filtered-results">
                <FilteredListView filteredList={filteredData} />
              </div>
            )}
        </div>

        <CustomDropdown
          label="Rating"
          options={ratingOptions}
          setFilterValue={setFilters}
          filterValue={filters}
          dropdownName="rating"
        />
        <CustomDropdown
          label="Genre"
          options={labelOptions}
          setFilterValue={setFilters}
          filterValue={filters}
          dropdownName="category"
        />
      </div>
    </div>
  );
};

export default Homepage;
