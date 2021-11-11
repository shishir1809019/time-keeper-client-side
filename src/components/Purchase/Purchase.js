import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const Purchase = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [purchaseProduct, setPurchaseProduct] = useState({});

  useEffect(() => {
    fetch(`https://calm-headland-36489.herokuapp.com/watch/${id}`)
      .then((res) => res.json())
      .then((data) => setPurchaseProduct(data));
  }, []);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    data.email = user.email;
    data.purchaseProduct = purchaseProduct.name;
    data.status = "pending";
    console.log(data);
    fetch("https://calm-headland-36489.herokuapp.com/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("One product purchased successfully");
          reset();
        }
      });
  };
  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <div className="text-center">
        <h2>{purchaseProduct.name}</h2>
        <img className="w-75 rounded " src={purchaseProduct.url} alt="" />
      </div>
      <div>
        <h2>Fill Up the form for purchase your watch</h2>
        <form
          className="form-main form-group"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="form-control mb-1"
            defaultValue={user.displayName}
            {...register("name")}
          />
          <input
            className="form-control  mb-1"
            placeholder="Enter Your phone number"
            type="number"
            {...register("number")}
          />
          <input
            className="form-control  mb-1"
            placeholder="Enter your Division"
            {...register("division", { required: true })}
          />
          <input
            className="form-control  mb-1"
            placeholder="Enter your Address"
            {...register("address", { required: true })}
          />
          <input
            className="form-control"
            placeholder="Post Code"
            type="number"
            {...register("code", { required: true })}
          />{" "}
          <br />
          <input
            className="form-control btn btn-outline-secondary"
            type="submit"
            value="PURCHASE"
          />
        </form>
      </div>
    </div>
  );
};

export default Purchase;
