import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { _id, name, price, url, description } = props.watch;
  return (
    <Col>
      <Card className="product">
        <Card.Img variant="top" height="250" src={url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <h6>Price: $ {price} </h6>
          <Card.Text>{description.slice(0, 100)}</Card.Text>
          <Link to={`/purchase/${_id}`}>
            <Button variant="warning" className="px-3">
              <i class="fas fa-shopping-bag"></i> Purchase
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
