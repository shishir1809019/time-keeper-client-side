import React from "react";

const ManageProduct = (props) => {
  const { _id, name, price } = props?.product;
  const { handleDeleteProduct } = props;

  return (
    <tr>
      <td>{props.index}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        {" "}
        <button
          onClick={() => {
            handleDeleteProduct(_id);
          }}
        >
          Delete
        </button>{" "}
      </td>
    </tr>
  );
};

export default ManageProduct;
