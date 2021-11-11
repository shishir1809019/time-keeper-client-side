import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import MyPurchase from "../MyPurchase/MyPurchase";

const MyPurchases = () => {
  const { user } = useAuth();
  const [myPurchases, setMyPurchases] = useState([]);
  useEffect(() => {
    fetch(`https://calm-headland-36489.herokuapp.com/myPurchases/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyPurchases(data);
      });
  }, []);

  const handleDeletePurchase = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you sure want to delete?");
    if (proceed) {
      fetch(`https://calm-headland-36489.herokuapp.com/purchase/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Successfully deleted");
            const remainingPurchases = myPurchases.filter(
              (MyPurchase) => MyPurchase._id !== id
            );
            setMyPurchases(remainingPurchases);
          }
        });
    }
  };

  return (
    <div>
      <h3 className="mb-3">Your Purchases</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SL</th>
            <th>Phone No</th>
            <th>Address</th>
            <th>Status</th>
            <th>Cancellation</th>
          </tr>
        </thead>
        <tbody>
          {myPurchases.map((myPurchase, index) => (
            <MyPurchase
              key={myPurchase._id}
              handleDeletePurchase={handleDeletePurchase}
              myPurchase={myPurchase}
              index={index + 1}
            ></MyPurchase>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyPurchases;
