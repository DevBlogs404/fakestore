import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const Product = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useDispatch(); // useDispatch() hook is used to call an action

  const { product } = props;

  const addItem = () => {
    setIsAdding(true); // button color changes to green
    setTimeout(() => {
      setIsAdding(false); // after 2 seconds the button color changes to yellow
    }, 1000);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="p-4 h-80 text-center bg-gray-200 text-black flex flex-col items-center justify-around rounded">
        <img className="w-20 flex items-center" src={product.image} alt="" />
        <h1 className="text-xl">{product.title}</h1>
        <p className="font-bold">$ {product.price}</p>
        <button
          className={`${
            isAdding
              ? "bg-green-500 rounded-full px-4 py-2 text-black"
              : "bg-yellow-300 rounded-full px-4 py-2 text-black"
          }`}
          disabled={isAdding}
          onClick={(e) => {
            e.preventDefault();
            addItem();
            dispatch(addToCart(product));
          }}
        >
          Add{isAdding ? "ed" : ""}
        </button>
      </div>
    </Link>
  );
};

export default Product;
