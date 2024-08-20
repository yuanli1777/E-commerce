import React from "react";
// import carts from "../data/carts";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";

import emptyCartImg from "../assets/empty-cart.svg";

const CartSection = () => {
  const { carts } = useCartStore();

  const { products } = useProductStore();

  const total = carts.reduce((pv, cv) => {
    const cost =
      cv.quantity * products.find(({ id }) => id === cv.productId).price;
    return pv + cost;
  }, 0);

  const tax = total * 0.05;

  const netTotal = total + tax;

  //printing cart can update later
  const handlePrintOut = () => {
    window.print();
  }

  return (
    <>
      <div className="flex flex-col gap-5">
        {/* empty item pic  */}
        {carts.length === 0 ? (
          <img
            src={emptyCartImg}
            alt="empty"
            className="w-[200px] block mx-auto mt-10"
          />
        ) : (
          carts.map((cart) => <Cart key={cart.id} cart={cart} />)
        )}
      </div>

      <div className="border-t border-black mt-5 py-5 flex justify-end gap-10">
        <div>
          <p className="text-gray-500">Total($)</p>
          <p className="font-bold">{total.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-gray-500">Tax(5%)</p>
          <p className="font-bold">{tax.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-gray-500">Net Total($)</p>
          <p className="font-bold text-xl">{netTotal.toFixed(2)}</p>
        </div>
      </div>
      <div className="text-end mt-2">
        <button
          onClick={handlePrintOut}
          className="print:hidden btn btn-primary border border-black  px-5 py-2"
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default CartSection;
