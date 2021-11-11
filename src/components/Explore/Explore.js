import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Home/Product/Product";

const Explore = () => {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch("https://calm-headland-36489.herokuapp.com/watches")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  });
  return (
    <Container>
      <h2 className="text-center my-4">Our All Products</h2>
      <Row xs={1} md={3} className="g-4">
        {watches.map((watch) => (
          <Product key={watch._id} watch={watch}></Product>
        ))}
      </Row>
    </Container>
  );
};

export default Explore;
