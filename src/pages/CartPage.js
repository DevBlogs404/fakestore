import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart, emptyCart } from "../redux/actions";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartData);
  let amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);

  return (
    <>
      <Navigation />
      <div className="container mx-auto">
        <button
          className="bg-red-700 rounded-full mt-2 px-4 py-2 text-black"
          onClick={(e) => {
            e.preventDefault();
            dispatch(emptyCart());
            navigate("/products");
          }}
        >
          Empty cart
        </button>
        {cartData.map((item) => {
          return (
            <ul key={item.id}>
              <li>
                <div className="flex items-center justify-around mt-4 p-4">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      className="bg-red-500 h-16"
                      alt="cartlogo"
                    />
                    <span className="font-bold ml-4 w-48">{item.title}</span>
                  </div>

                  <div>$ {item.price}</div>
                  <button
                    className="bg-red-700 rounded-full px-4 py-2 text-black"
                    onClick={() => {
                      dispatch(removeFromCart(item.id));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
              <hr className="my-5" />
            </ul>
          );
        })}
        <div className="text-right mr-10 mt-4">
          <b>Total :</b> $ {amount}
        </div>
        <div className="text-right mr-10 mt-4">
          <button className="bg-blue-700 rounded-full px-4 py-2 text-black">
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
