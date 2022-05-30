import React from "react";
//import { toast } from "react-toastify";

const ProductsRow = ({ product, index, refetch, setDeletingProduct }) => {
  const { name,Product_Price
    , img } = product;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-8 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{Product_Price}</td>
      <td>
        <label
          onClick={() => setDeletingProduct(product)}
          htmlFor="delete-confirm-modal"
          className="btn btn-xs btn-error font-bold hover:bg-red-500 hover:text-white"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ProductsRow;
