import React from "react";
import Rating from "../Rating/rating";
import "./FilteredListView.css";

const FilteredListView = ({ filteredList = [] }) => {
  return (
    <div className="filter-list-wrapper border-primary">
      {filteredList.map((value, index) => {
        return (
          <div key={index} className="list-card">
            <div className="d-flex justify-content-between">
              <span className="movie-title">{value.title}</span>
              <span className="movie-genre">{value.category}</span>
            </div>
            <div className="movie-rating">
              <Rating rating={value.rating} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FilteredListView;
