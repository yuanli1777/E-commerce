import React from "react";
import carts from "../data/carts";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const CartSection = () => {
  
  return (
    <>
      <div className="flex flex-col gap-5">
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart} />
      ))}
      </div>


      <div className="border-t border-black mt-5 py-5 flex justify-end gap-10">
        <div>
            <p className="text-gray-500">Total($)</p>
            <p className="font-bold">122.89</p>
        </div>
        <div>
            <p className="text-gray-500">Tax(10%)</p>
            <p className="font-bold">12.29</p>
        </div>
        <div>
            <p className="text-gray-500">Net Total($)</p>
            <p className="font-bold text-xl">135.18</p>
        </div>
      </div>
      <div className="text-end mt-2">
      <Link to="/checkout" className="btn btn-primary border border-black  px-5 py-2">Checkout</Link>
      </div>
    </>
  );
};

export default CartSection;
