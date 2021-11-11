import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import ManageProduct from "../ManageProduct/ManageProduct";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const { isLoading, setIsLoading } = useAuth();
  useEffect(() => {
    fetch("https://calm-headland-36489.herokuapp.com/watches")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const handleDeleteProduct = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you sure want to delete?");
    if (proceed) {
      fetch(
        `https://calm-headland-36489.herokuapp.com/dashboard/watches/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Successfully deleted");
            const remainingProducts = products.filter(
              (product) => product._id !== id
            );
            setProducts(remainingProducts);
          }
        });
    }
  };
  return (
    <div>
      <h3 className="mb-3">All Products</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SL</th>
            <th>Product Name(Watch)</th>
            <th>Price</th>
            <th>Delete Product</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ManageProduct
              key={product._id}
              handleDeleteProduct={handleDeleteProduct}
              product={product}
              index={index + 1}
            ></ManageProduct>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageProducts;
