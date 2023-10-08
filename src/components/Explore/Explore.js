import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Product from "../Home/Product/Product";

const Explore = () => {
  const [watches, setWatches] = useState([]);
  const [dataLoad, setDataLoad] = useState(true);
  useEffect(() => {
    fetch("https://time-keeper-server-api.vercel.app/watches")
      .then((res) => res.json())
      .then((data) => setWatches(data))
      .finally(() => {
        setDataLoad(false);
      });
  });
  return (
    <Container>
      <h2 className="text-center my-4">Our All Products</h2>
      {dataLoad ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <Row xs={1} md={3} className="g-4">
          {watches.map((watch) => (
            <Product key={watch._id} watch={watch}></Product>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Explore;
