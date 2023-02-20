import React from "react";
import { Link } from "react-router-dom";
import cartLogo from "../images/cart.png";
import { useSelector } from "react-redux";

const Navigation = () => {
  const result = useSelector((state) => {
    return state.cartData;
  });
  return (
    <div className=" w-full flex items-center justify-between bg-gray-500 text-white h-30 p-8 ">
      <div>
        <Link to="/">
          <h1
            className="text-4xl font-bold"
            style={{ color: "rgb(70, 255, 211)" }}
          >
            FakeStore
          </h1>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Link className=" text-2xl hover:text-red-300 " to="/">
          Home
        </Link>
        <Link className="ml-8 text-2xl hover:text-red-300" to="/products">
          Products
        </Link>
        <Link
          className="ml-8 bg-yellow-500 rounded-full h-10 w-10  flex items-center justify-center hover:bg-gray-400"
          to="/cart"
        >
          <span className="absolute top-6 right-8 text-black text-2xl">
            {result.length}
          </span>
          <img src={cartLogo} alt="cart" />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
