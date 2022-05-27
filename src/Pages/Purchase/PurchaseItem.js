import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from "date-fns";
import correct from "../Home/images/correct.png"


const PurchaseItem = () => {
  const { id } = useParams();
  const [purchaseItems, setPurchaseItems] = useState({});
  const [reload, SetIsReload] = useState(true);
  const [user, loading, error] = useAuthState(auth);
  const [date, setDate] = useState(new Date());
  const img = <img src={correct} alt="" />
  
  const formattedDate = format(date, 'PP');
  const { register, formState: { errors }, handleSubmit } = useForm();
  useEffect(() => {
    fetch(` http://localhost:5000/carPartsItems/${id}`)
      .then((res) => res.json())
      .then((data) => setPurchaseItems(data));
  }, [ reload ]);
 
  const onSubmit = ( data,e) => {
        console.log(data)
        e.target.reset();
   const orders = {
        userName:user.displayName,
        email: user.email,
        productName: purchaseItems.name,
        date: formattedDate,
        price:purchaseItems.price,
        address:data.address,
        quantity:data.quantity,
        phone:data.phone
        
    }
    
    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(orders)
    })
      .then(res => res.json())
      .then(data => {
          if(data){
              toast(`Your Order is successfully today ${formattedDate}`)
            
          }
      });
    
   


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
          <p className="font-serif ...">
            <span className="font-semibold font-serif ...">Description:</span>
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
                  <span className="label-text">User name</span>
                </label>
                <input
                  type="text"
                 name="name"
                  disabled defaultValue={user?.displayName || ''}
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
                 name="email"
                  disabled defaultValue={user?.email || ''}
                  className="input input-bordered input-primary w-full max-w-xs"
                />
                <label className="label">  
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Product name</span>
                </label>
                <input
                  type="text"
                  name="product_name"
                  disabled defaultValue={purchaseItems?.name || ''}
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
                  {...register("address", {
                    required: {
                        value: true,
                        message: 'Address is required'
                    }
                })} 
                />
                 <label className="label">
               {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>} 
            </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="text"
                  name="date"
                  defaultValue={format(date, 'PP')}
                             
                  className="input input-bordered input-primary w-full max-w-xs"              
                />
                 <label className="label">
                
            </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Phone number</span>
                </label>
                
                <input
              
                  type="number"
                  name="phone"
                  placeholder="Phone number"
                  className="input input-bordered input-primary  w-full max-w-xs"
                  {...register("phone", {
                    required: {
                        value: true,
                        message: 'Phone number is required'
                    }
                })} 
                />
          <label className="label">
               {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>} 
            </label>
              </div>
              <input
             
                disabled={ errors.quantity?.type === 'max' || errors.quantity?.type === 'min'} 
                className="btn btn-accent text-orange-800 font-bold  w-full max-w-xs  "
                type="submit"
                value="Place Order"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseItem;

