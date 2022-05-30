import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import userpng from "../Home/images/userImg.jpg";
import Loading from "../Shared/Loading";

const MyProfile = () => {
   // const {id} = useParams();
    //const [data,setData]= useState();
  const {register, formState: { errors }, handleSubmit, reset,} = useForm();
  const [user, loading, error] = useAuthState(auth);
    const onSubmit =(data,event)  =>{

  console.log(data)
 //e.target.reset();
 const profileData = {
   name: user.displayName,
   email: user.email,
   education: data.education,
   location: data.location,
   phone_number: data.phone_number,
   linkedin_profile:data.linkedin
 };
 if(user.email){
    fetch(`https://safe-shore-51251.herokuapp.com/users/${user.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(profileData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            toast.success(`Your Profile Update successfully `);
          }
        });
     };
 }
 const [reload,SetIsReload]=useState(true)
 const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://safe-shore-51251.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) =>{
        SetIsReload(!reload)
        setItems(data)
      }
    );
  }, [reload]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-5">
      <div className="card w-96 flex mx-auto  bg-base-100 shadow-xl">
        <div className="avatar">
          <div className="w-24 mx-auto mt-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={userpng} />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <p className="card-title text-xl font-semibold">Name: {user.displayName}</p>
          <p className="card-title text-xl font-semibold">Email: {user.email}</p>
          <p className="card-title text-xl font-semibold">Education: {items.education}</p>
          <p className="card-title text-xl font-semibold">Location/city: {items.location}</p>
          <p className="card-title text-xl font-semibold">Phone number: {items.phone_number}</p>
          <p className="card-title  text-xl font-semibold">
            Linkedin profile link:
          </p>
          <a href="{items.linkedin_profile}"> Linkedin profile link</a>

          <div className="card-actions"></div>
        </div>
      </div>
      <div className="flex  justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-purple-800 text-2xl font-bold">
              Update Your Profile
            </h2>
            <form  onSubmit={handleSubmit(onSubmit)}  >
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <input
                  type="text"
                  defaultValue={user.displayName}
                  name="User_name"
                  placeholder="Your name"
                  className="input input-bordered input-primary w-full max-w-xs"
                  {...register("User_name", {
                    required: {
                      value: true,
                      message: "Your name is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.User_name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.User_name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <input
                  type="text"
                  defaultValue={user.email}
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered input-primary w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <input
                  type="text"
                
                  name="education"
                  placeholder="Education"
                  className="input input-bordered input-primary w-full max-w-xs"
                  {...register("education", {
                    required: {
                      value: true,
                      message: "Education is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.education?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.education.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Location/city"
                  className="input input-bordered input-primary w-full max-w-xs"
                  {...register("location", {
                    required: {
                      value: true,
                      message: "location is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.location?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.location.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <input
                  type="number"
                  name="phone_number"
                  placeholder="Your phone number"
                  className="input input-bordered input-primary w-full max-w-xs"
                  {...register("phone_number", {
                    required: {
                      value: true,
                      message: "phone_number is required",
                    },
                  })}
                />

                <label className="label">
                  {errors.phone_number?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.phone_number.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <input
                  type="text"
                  name="linkedin"
                  placeholder="Linkedin profile link"
                  className="input input-bordered input-primary w-full max-w-xs"
                  {...register("linkedin", {
                    required: {
                      value: true,
                      message: "Linkedin profile link is required",
                    },
                  })}
                />

                <label className="label">
                  {errors.linkedin?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.linkedin.message}
                    </span>
                  )}
                </label>
              </div>

              <input 
          
                className="btn btn-accent text-orange-800 font-bold  w-full max-w-xs  "
                type="submit"
                value="Save"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
