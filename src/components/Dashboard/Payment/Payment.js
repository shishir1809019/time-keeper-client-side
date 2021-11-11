import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51J0gUUF3Jx3DSvyWQx50ynTWJ3ir8OQHgpq12NDUmr17NHIWFuOI3X51eDiINa4im7dAv29OTN7EDv285zNLoeC100blIcYsab"
  );
  return (
    <div className="w-50">
      <h3 className="mb-4">Pay for confirm purchase</h3>
      <Elements stripe={stripePromise}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#000",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </Elements>
      <input className="btn btn-outline-dark mt-2" value="Pay" type="submit" />
    </div>
  );
};

export default Payment;
