import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ProductsRow from "./ProductsRow";

const ManageProducts = () => {
  const [deletingProduct, setDeletingProduct] = useState(null);

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("https://safe-shore-51251.herokuapp.com/product", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold">Manage Products: {products.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>NO.</th>
              <th>Image</th>
              <th>Product_Name</th>
              <th>Product_Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductsRow
                key={product._id}
                product={product}
                index={index}
                refetch={refetch}
                setDeletingProduct={setDeletingProduct}
              ></ProductsRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingProduct && (
        <DeleteConfirmModal
          deletingProduct={deletingProduct}
          refetch={refetch}
          setDeletingProduct={setDeletingProduct}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageProducts;
