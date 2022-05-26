import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

//import { format } from 'date-fns';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
//import { toast } from 'react-toastify';

const PurchaseItem = () => {
  const { id } = useParams();
  const [purchaseItems, setPurchaseItems] = useState({});
  const [reload, SetIsReload] = useState(true);
  const [qurantityError, SetQurantityError] = useState(true);
  //console.log(qurantityError)
  const [user, loading, error] = useAuthState(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  useEffect(() => {
    fetch(` http://localhost:5000/carPartsItems/${id}`)
      .then((res) => res.json())
      .then((data) => setPurchaseItems(data));
  }, [reload]);
 /*  const handleChangeQuantity = event =>{
    event.preventDefault();
    const minQty=purchaseItems.quantity;
    const userAddQty= event.target.value;
    if(userAddQty<minQty){
      //  SetQurantityError(event.target.value);
      alert("Quantity min!!!");
      
    }
  
  } */
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
  const onSubmit = async data => {
    console.log(data)
   // await createUserWithEmailAndPassword(data.email, data.password);
   // await updateProfile({ displayName: data.name });
   // console.log('update done');
}
  return (
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
            <form  onSubmit={handleSubmit(onSubmit)} >
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                 
                  disabled value={user?.displayName || ''}
                  className="input input-bordered input-primary w-full max-w-xs"
                  
                 
                />
                <label className="label">
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                
                  disabled value={user?.email || ''}
                  className="input input-bordered input-primary w-full max-w-xs"
                />
                <label className="label">  
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Product</span>
                </label>
                <input
                  type="text"
                
                  disabled value={purchaseItems?.name || ''}
                  className="input input-bordered input-primary w-full max-w-xs"
                />
                <label className="label">  
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="The quantity you want"
                  className="input input-bordered input-primary w-full max-w-xs"
                  {...register ("quantity", {
                    required: {
                        value: true,
                        message: 'Provide a valid quantity required'
                    },
                    max: {
                        value:`${purchaseItems.available_quantity}`,
                        message: 'Less than available quantity required'
                    },
                    min: {
                        value:`${purchaseItems.minimum_order_quantity}`,
                        message: 'More than minimum quantity required'
                    }
                })} 
                 
                />
               <label className="label">
                               {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>} 
                               {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>} 
                               {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>} 

                            </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Your Address"
                  className="input input-bordered input-primary w-full max-w-xs"
                  
                />
                 <label className="label">
                
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

