import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import giftBox from "../../../images/giftBox-img.jpg";

const GiftBox = () => {
  return (
    <div className="row container my-5">
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <div className="">
          <h5 className="text-warning ">SPECIAL OFFER</h5>
          <p style={{ fontSize: "25px" }}>SUCCULENT GARDEN</p>
          <h1 className="text-warning ">GIFT BOXES</h1>
          <p className="text-muted">
            From planter materials to style options, <br /> discover which
            planter is best for your space.
          </p>
          <Link to="explore">
            <Button className="btn btn-warning">Explore The Shop</Button>
          </Link>
        </div>
      </div>
      <div className="col-md-6">
        <img className="img-fluid" src={giftBox} alt="" />
      </div>
    </div>
  );
};

export default GiftBox;
