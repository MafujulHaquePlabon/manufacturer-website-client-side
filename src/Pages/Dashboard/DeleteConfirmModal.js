import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({
  deletingProduct,
  refetch,
  setDeletingProduct,
}) => {
  const { name, _id } = deletingProduct;
  const handleDelete = (id) => {
      console.log(id)
    fetch(`https://safe-shore-51251.herokuapp.com/product/${id}`, {
      method: "DELETE",
      headers: {
      
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Product: ${name} is deleted.`);
          setDeletingProduct(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg  text-red-500">
            Are you sure you want to delete {name}!
          </h3>
          <p className="py-4">
            If yes! click to delete button.
          </p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-xs btn-error font-bold hover:bg-rose-500 hover:text-white "
            >
              Delete
            </button>
            <label htmlFor="delete-confirm-modal" className="btn btn-xs font-bold hover:bg-black hover:text-white">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
