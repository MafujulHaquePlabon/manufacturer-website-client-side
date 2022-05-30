import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddAProduct = () => {
  
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data:product , isLoading } = useQuery('product', () => fetch('https://safe-shore-51251.herokuapp.com/carPartsItems').then(res => res.json()))

    const imageStorageKey='60d001b21c5eabd075c878cfb7fa0e02';

    /**
     * 3 ways to store images
     * 1. Third party storage //Free open public storage is ok for Practice project 
     * 2. My own storage in my own server (file system)
     * 3. Database: Mongodb 
     * 
     * YUP: to validate file: Search: Yup file validation for react hook form
    */
    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const product = {
                    name: data.Product_name,
                   // email: data.email,
                   Product_Price: data.Product_Price,
                   Available_quantity: data.Available_quantity,
                   Minimum_order_quantity: data.Minimum_order_quantity,
                   Description: data.Description,
                    img: img
                }
                // send to my database 
                fetch('https://safe-shore-51251.herokuapp.com/product', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Product added successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add the product');
                    }
                })

            }
            
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="flex  justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-orange-800 text-2xl font-bold">Add a New Product</h2>  
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Product name</span>
                  </label>
                  <input
                    type="text"
                    name="Product_name"
                    placeholder="Product name"
                    className="input input-bordered input-primary w-full max-w-xs"
                    {...register("Product_name", {
                      required: {
                        value: true,
                        message: "Product name is required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.Product_name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.Product_name.message}
                      </span>
                    )}
                  </label>
                </div>
            <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Product Price</span>
                  </label>
                  <input
                    type="number"
                    name="Product_Price"
                    placeholder="Product_Price"
                    className="input input-bordered input-primary w-full max-w-xs"
                    {...register("Product_Price", {
                      required: {
                        value: true,
                        message: "Product Price is required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.Product_Price?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.Product_Price.message}
                      </span>
                    )}
                  </label>
                </div>
            <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Product Available quantity</span>
                  </label>
                  <input
                    type="number"
                    name="Available_quantity"
                    placeholder="Available_quantity"
                    className="input input-bordered input-primary w-full max-w-xs"
                    {...register("Available_quantity", {
                      required: {
                        value: true,
                        message: "Product available quantity is required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.Product_name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.Product_name.message}
                      </span>
                    )}
                  </label>
                </div>
            <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Minimum order quantity</span>
                  </label>
                  <input
                    type="number"
                    name="Minimum_order_quantity"
                    placeholder="Minimum_order_quantity"
                    className="input input-bordered input-primary w-full max-w-xs"
                    {...register("Minimum_order_quantity", {
                      required: {
                        value: true,
                        message: "Product minimum_order_quantity is required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.Minimum_order_quantity?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.Minimum_order_quantity.message}
                      </span>
                    )}
                  </label>
                </div>
            <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                   <input
                    type="text"
                    name="Description"
                    placeholder="Product description"
                    className="input input-bordered input-primary w-full max-w-xs"
                    {...register("Description", {
                      required: {
                        value: true,
                        message: "Product Description is required",
                      },
                    })}
                  /> 
                 
                  <label className="label">
                    {errors.Description?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.Description.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered input-primary w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <input
                  className="btn btn-accent text-orange-800 font-bold  w-full max-w-xs  "
                  type="submit"
                  value="Add_A_New_Product"
                />
              </form>
        </div>
       </div>
       </div>
    );
};

export default AddAProduct;