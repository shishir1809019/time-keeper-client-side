import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch("http://localhost:5000/dashboard/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("One product added successfully");
          reset();
        }
      });
  };
  return (
    <div className="mb-5 ">
      <h3>Add A Product</h3>
      <form
        className="form-main form-group w-75 mt-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="d-flex ">
          <input
            className="form-control  mb-1 me-2"
            placeholder="Enter product name"
            {...register("name", { required: true })}
          />
          <input
            className="form-control  mb-1"
            type="number"
            placeholder="Enter product price"
            {...register("price", { required: true })}
          />
        </div>
        <input
          className="form-control  mb-1"
          placeholder="Enter product photo URL"
          {...register("url", { required: true })}
        />
        <textarea
          className="form-control  mb-2"
          placeholder="Enter Product description"
          {...register("description", { required: true })}
        />
        <input
          className=" btn btn-outline-dark"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
