import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Product/Product";

const Products = () => {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/watches")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  return (
    <Container>
      <h2 className="text-center my-4">Our Products</h2>
      <Row xs={1} md={3} className="g-4">
        {watches.slice(0, 6).map((watch) => (
          <Product key={watch._id} watch={watch}></Product>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
