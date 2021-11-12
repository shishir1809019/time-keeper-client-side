import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Product from "../Product/Product";

const Products = () => {
  const [watches, setWatches] = useState([]);
  const [dataLoad, setDataLoad] = useState(true);
  useEffect(() => {
    fetch("https://calm-headland-36489.herokuapp.com/watches")
      .then((res) => res.json())
      .then((data) => setWatches(data))
      .finally(() => setDataLoad(false));
  }, []);
  return (
    <Container>
      <h2 className="text-center my-4">Our Products</h2>
      {dataLoad ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <Row xs={1} md={3} className="g-4">
          {watches.slice(0, 6).map((watch) => (
            <Product key={watch._id} watch={watch}></Product>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Products;
