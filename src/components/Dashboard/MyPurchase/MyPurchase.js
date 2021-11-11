import React from "react";

const MyPurchase = (props) => {
  const { _id, name, division, address, status, number } = props?.myPurchase;
  const { handleDeletePurchase } = props;
  return (
    <tr>
      <td>{props.index}</td>
      <td>{division}</td>
      <td>{address}</td>
      <td>{status}</td>
      <td>
        {" "}
        <button
          onClick={() => {
            handleDeletePurchase(_id);
          }}
        >
          Cancel
        </button>{" "}
      </td>
    </tr>
  );
};

export default MyPurchase;
