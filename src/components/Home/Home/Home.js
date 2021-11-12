import React from "react";
import Banner from "../Banner/Banner";
import GiftBox from "../GiftBox/GiftBox";
import Products from "../Products/Products";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <Testimonials />
      <GiftBox />
    </div>
  );
};

export default Home;
