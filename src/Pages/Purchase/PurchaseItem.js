import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

//import { format } from 'date-fns';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
//import { toast } from 'react-toastify';

const PurchaseItem = () => {
  const { id } = useParams();
  const [purchaseItems, setPurchaseItems] = useState({});
  const [reload, SetIsReload] = useState(true);
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    fetch(` http://localhost:5000/carPartsItems/${id}`)
      .then((res) => res.json())
      .then((data) => setPurchaseItems(data));
  }, [reload]);
  const handleUpdateInventoryItem = (event) => {
    event.preventDefault();
    const quantity =
      parseInt(event.target.quantity.value) + parseInt(purchaseItems.quantity);
    const updatedCarPartsItems = { quantity };
    // send data to the server
    const url = `http://localhost:5000/carPartsItems/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCarPartsItems),
    })
      .then((res) => res.json())
      .then((data) => {
        SetIsReload(!reload);
        console.log("success", data);
        alert("CarPartsItems Quantity added successfully!!!");
        event.target.reset();
      });
  };
  const handleDeliveredInventoryItem = () => {
    const quantity = parseInt(purchaseItems.available_quantity) - 1;
    const updatedCarPartsItems = { quantity };
    // send data to the server
    const url = `http://localhost:5000/carPartsItems/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCarPartsItems),
    })
      .then((res) => res.json())
      .then((data) => {
        SetIsReload(!reload);
        console.log("success", data);
        alert("CarPartsItems Quantity Delivered successfully!!!");
      });
  };
  return (
    /* 
        <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img style={{height:"350px"}} src={purchaseItems.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title ">Product name: {purchaseItems.name}</h2>
        <h1 className="text-xl font-semibold">Price: {purchaseItems.price}</h1>
        <h1 className="text-xl font-semibold">Available_quantity: {purchaseItems.available_quantity}</h1>
        <h1 className="text-xl font-semibold">Minimum_order_quantity: {purchaseItems.minimum_order_quantity}</h1>
        <p><span className="font-semibold">Description:</span>{purchaseItems.description}</p>
      </div>
    </div> 
    </div>  */

    <div className="grid grid-cols-1 md:grid-cols-2 mx-10 gap-5">
      <div className="card  bg-base-100 shadow-xl  mx-5">
        <figure className="px-10 pt-10">
          <img
            style={{ height: "350px" }}
            src={purchaseItems.img}
            alt="car parts"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title ">Product name: {purchaseItems.name}</h2>
          <h1 className="text-xl font-semibold">
            Price: {purchaseItems.price}
          </h1>
          <h1 className="text-xl font-semibold">
            Available_quantity: {purchaseItems.available_quantity}
          </h1>
          <h1 className="text-xl font-semibold">
            Minimum_order_quantity: {purchaseItems.minimum_order_quantity}
          </h1>
          <p>
            <span className="font-semibold">Description:</span>
            {purchaseItems.description}
          </p>
          <div className="card-actions"></div>
        </div>
      </div>
      <div className="flex  justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-orange-800 text-2xl font-bold">
              Purchase
            </h2>
            <form /* onSubmit={handleSubmit(onSubmit)} */>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered input-primary w-full max-w-xs"
                  /*   {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })} */
                />
                <label className="label">
                  {/*  {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>} */}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered input-primary w-full max-w-xs"
                  /*  {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })} */
                />
                <label className="label">
                  {/*  {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} */}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Total quantity"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
                <label className="label"></label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Address"
                  className="input input-bordered input-primary w-full max-w-xs"
                  /* {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is Required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })} */
                />

                <label className="label">
                  {/*  {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>} */}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="input input-bordered input-primary  w-full max-w-xs"
                />
                <label className="label"></label>
              </div>

              <input
                className="btn btn-accent text-orange-800 font-bold  w-full max-w-xs text-white"
                type="submit"
                value="Order Place"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseItem;

