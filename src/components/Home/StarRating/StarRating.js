import React from "react";
import ReactStars from "react-rating-stars-component";
const StarRating = ({ rating }) => {
  return (
    <div className="d-flex justify-content-center">
      <ReactStars
        count={5}
        value={rating}
        //   onChange={ratingChanged}
        size={24}
        edit={false}
        isHalf={true}
        activeColor="#ffd700"
      />
    </div>
  );
};

export default StarRating;
