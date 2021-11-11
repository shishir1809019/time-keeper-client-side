import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ManagePurchase from "../ManagePurchase/ManagePurchase";

const ManageAllPurchases = () => {
  const [allPurchases, setAllPurchases] = useState([]);
  const [recall, setRecall] = useState(null);

  useEffect(() => {
    fetch("https://calm-headland-36489.herokuapp.com/dashboard/allPurchases")
      .then((res) => res.json())
      .then((data) => setAllPurchases(data));
  }, [recall]);

  const handleDeletePurchase = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you sure want to delete?");
    if (proceed) {
      fetch(
        `https://calm-headland-36489.herokuapp.com/dashboard/purchase/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Successfully deleted");
            setRecall(true);
          }
        });
    }
  };
  const handleUpdatePurchase = (id) => {
    fetch(
      `https://calm-headland-36489.herokuapp.com/dashboard/purchaseStatus/${id}`,
      {
        method: "PUT",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify()
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("This product have been shipped");
          setRecall(true);
        }
      });
  };
  return (
    <div>
      <h3 className="mb-3">All Purchase</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SL</th>
            <th>User Name</th>
            <th>Product Name(Watch)</th>
            <th>Status/Update</th>
            <th>Delete Purchase</th>
          </tr>
        </thead>
        <tbody>
          {allPurchases.map((product, index) => (
            <ManagePurchase
              key={product._id}
              handleDeletePurchase={handleDeletePurchase}
              handleUpdatePurchase={handleUpdatePurchase}
              product={product}
              index={index + 1}
            ></ManagePurchase>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageAllPurchases;
