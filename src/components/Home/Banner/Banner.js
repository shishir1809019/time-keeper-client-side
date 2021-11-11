import React from "react";
import { Button } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-main text-light d-flex align-items-center ">
      <div className="container">
        <h5>Nice Watch Collection</h5>
        <h1 className="text-warning">Black Great Addition</h1>
        <p>
          A watch is a portable timepiece intended to be carried or worn by a
          person. <br /> It is designed to keep a consistent movement despite
          the motions{" "}
        </p>
        <Button className="mt-3 px-4" variant="warning">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default Banner;
