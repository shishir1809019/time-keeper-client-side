import React from "react";
import img from "../../images/404page.jpg";

const NotFound = () => {
  return (
    <div
      style={{ background: "#f1f1f1" }}
      className="d-flex justify-content-center py-5"
    >
      <img src={img} alt="" />
    </div>
  );
};

export default NotFound;
