import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L4mkEJQgFGfJAs6Gw4rJjRsczEtv6Ub8AWGhwwsKwENwTJPOVvT5E1YFlHIt4GXTiVTuZ1W3LUfqyD3y7eX5kRg00onG7QMXK"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://safe-shore-51251.herokuapp.com/orders/${id}`;

  const { data: orders, isLoading } = useQuery(["orders", id], () =>
    fetch(url, {
      method: "GET",
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
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">Hello, {orders.userName}</p>
          <h2 className="card-title">Please Pay for {orders.productName}</h2>
          <p>
            Your Product Order:{" "}
            <span className="text-orange-700">{orders.productName}</span> at{" "}
            {orders.date}
          </p>
          <p>Please pay: ${orders.price * orders.quantity}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm orders={orders} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
