import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const { user } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    data.email = user.email;
    data.date = new Date().toLocaleDateString();
    fetch("https://calm-headland-36489.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Your review placed successfully!!");
          reset();
        }
      });
  };
  return (
    <div>
      <h3>Place Review</h3>
      <form className="form-main form-group" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control mb-1"
          defaultValue={user.displayName}
          placeholder="your name"
          {...register("name", { required: true })}
        />
        <input
          className="form-control  mb-1"
          placeholder="Enter a ratting out of 5"
          {...register("rating", { required: true })}
        />

        <textarea
          className="form-control  mb-2"
          placeholder="Enter your opinion about our products or services"
          {...register("description", { required: true })}
        />
        <input type="submit" value="Submit" className="btn btn-outline-dark" />
      </form>
    </div>
  );
};

export default Review;
