import React from 'react';
import { useForm } from 'react-hook-form';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    return (
        <div className="flex  justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-orange-800 text-2xl font-bold">Add a New Product</h2>  
            <form /* onSubmit={handleSubmit(onSubmit)} */>
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

export default MyProfile;