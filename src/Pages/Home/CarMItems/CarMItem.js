import React from "react";
import { useNavigate, useParams } from "react-router";

const CarMItem = (props) => {
  const {
    _id,
    name,
    img,
    description,
    price,
    available_quantity,
    minimum_order_quantity,
  } = props.item;
  const navigate = useNavigate();
  const navigateToCarMItemDetail = (id) => {
    //  console.log(_id)
    navigate(`/carPartsItems/${id}`);
  };

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          style={{ height: "350px" }}
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title ">Product name: {name}</h2>
        <h1 className="text-xl font-semibold">Price: {price}</h1>
        <h1 className="text-xl font-semibold">
          Available_quantity: {available_quantity}
        </h1>
        <h1 className="text-xl font-semibold">
          Minimum_order_quantity: {minimum_order_quantity}
        </h1>
        <p>
          <span className="font-semibold">Description:</span>
          {description}
        </p>
        <div className="card-actions">
          <button
            onClick={() => navigateToCarMItemDetail(_id)}
            className="btn btn-accent text-orange-800 font-bold w-full max-w-xs"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarMItem;
