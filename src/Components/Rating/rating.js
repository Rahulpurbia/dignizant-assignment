import React from "react";
import Star from "../../Assets/Images/Star.svg";
import StarDark from "../../Assets/Images/StarDark.svg";
import "./rating.css";

const Rating = ({ rating = 0, totalCount = 10 }) => {
  const starArray = new Array(totalCount).fill(0);

  return (
    <div className="no-wrap pointer">
      {starArray.map((value, index) => {
        const imageSrc = index + 1 <= rating ? StarDark : Star;
        return (
          <img
            src={imageSrc}
            alt="star"
            width={"24px"}
            key={index}
            className="star"
            style={{
              transform: `translateX(-${index * 4}px)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Rating;
