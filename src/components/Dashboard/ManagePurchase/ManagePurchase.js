import React from "react";

const ManagePurchase = (props) => {
  const { _id, name, purchaseProduct, price, status } = props?.product;
  const { handleDeletePurchase, handleUpdatePurchase } = props;
  return (
    <tr>
      <td>{props.index}</td>
      <td>{name}</td>
      <td>{purchaseProduct}</td>
      <td>
        {status}{" "}
        <button onClick={() => handleUpdatePurchase(_id)}>Confirm</button>
      </td>
      <td>
        {" "}
        <button
          onClick={() => {
            handleDeletePurchase(_id);
          }}
        >
          Delete
        </button>{" "}
      </td>
    </tr>
  );
};

export default ManagePurchase;
