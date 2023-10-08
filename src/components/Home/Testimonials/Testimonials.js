import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Testimonials.css";
import StarRating from "../StarRating/StarRating";

SwiperCore.use([Navigation, Pagination]);
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://time-keeper-server-api.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  });

  return (
    <div className="my-5">
      <h2 className="my-4 text-center">Testimonials</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {reviews?.map((review, index) => (
          <SwiperSlide className="mb-5 bg-dark text-light rounded ">
            <div style={{ height: "175px" }} className="my-5">
              {index + 1}. {review.name}
              <br /> {review.description.slice(0, 85)}
              <StarRating rating={review.rating}></StarRating>
              <br /> <h5 className="text-danger">Customer</h5>
              <span>{review?.date}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
