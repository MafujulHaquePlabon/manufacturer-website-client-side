import React from "react";
import { useNavigate } from "react-router";

const BeforeOrderPurchasePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div className="h-screen flex justify-center ">
      <div className="flex justify-center items-center text-xl font-semibold  ">
        <h1>Hi! please Purchase orders from the Home page </h1>
        <input
          onClick={handleClick}
          className=" text-green-800 underline ml-2 text-xl font-bold"
          type="submit"
          value="Click here to home page"
        />
      </div>
    </div>
  );
};

export default BeforeOrderPurchasePage;
