import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Testimonials.css";
import Testimonial from "../Testimonial/Testimonial";
import { Row } from "react-bootstrap";

SwiperCore.use([Navigation, Pagination]);
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  });

  return (
    <>
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
        {reviews.map((feedback, index) => (
          <SwiperSlide className="mb-5 bg-dark text-light rounded ">
            {index + 1}. {feedback.name}
            <br /> {feedback.description}
            <br /> Customer
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonials;
