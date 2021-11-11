import React from "react";
import { Card, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination]);

const Testimonial = () => {
  //   const { name, id, description } = props.feedback;
  return (
    <SwiperSlide>1</SwiperSlide>
    // <SwiperSlide className="mx-5">
    //   <Col>
    //   <Card>
    //     {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
    //     <Card.Body>
    //       <Card.Title>
    //         {id}. {name}
    //       </Card.Title>
    //       <Card.Text>{description}</Card.Text>
    //       <Card.Text>Customer</Card.Text>
    //     </Card.Body>
    //   </Card>
    //   </Col>
    // </SwiperSlide>
  );
};

export default Testimonial;
