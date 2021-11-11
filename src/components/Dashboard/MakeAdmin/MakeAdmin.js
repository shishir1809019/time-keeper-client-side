import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState();
  const { token } = useAuth();
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://calm-headland-36489.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("New Admin added successfully!");
        }
      });
    e.preventDefault();
  };
  return (
    <div className="my-5 pb-5 ">
      <h3>Make an Admin</h3>
      <form className="form-group w-75" onSubmit={handleAdminSubmit}>
        <input
          type="email"
          className="form-control"
          placeholder="Enter new admin email"
          onBlur={handleOnBlur}
        />
        <input
          className="btn btn-outline-dark mt-2"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default MakeAdmin;
