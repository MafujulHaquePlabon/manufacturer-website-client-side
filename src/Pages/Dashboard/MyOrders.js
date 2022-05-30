import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(
        `https://safe-shore-51251.herokuapp.com/orders?email=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user]);

  return (
    <div>
      <h2 className="text-xl font-semibold">My orders: {orders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Your_name</th>
              <th>Date</th>
              <th>Email</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total_price</th>
              <th>Delete</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.userName}</td>
                <td>{order.date}</td>
                <td>{order.email}</td>
                <td>{order.quantity} pcs</td>
                <td>{order.price} $</td>
                <td>{order.quantity * order.price} $</td>
                <td>
                  {" "}
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs btn-error hover:bg-red-500 hover:text-white">
                        Delete
                      </button>
                    </Link>
                  )}
                </td>
                {/*  <td>{order.treatment}</td> */}
                <td>
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs btn-success hover:bg-green-600 hover:text-white">
                        pay
                      </button>
                    </Link>
                  )}
                  {order.price && order.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">
                          {order.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
