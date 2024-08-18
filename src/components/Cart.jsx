import React from "react";

const Cart = ({ cart }) => {
  return (
    <>
      <div className="border border-black p-5 grid grid-cols-6  items-center max-[480px]:hidden">
        <div className="col-span-1">
          <img src={cart.product.image} className="h-16" alt="" />
        </div>

        <div className="col-span-3">
          <p className="mb-2">{cart.product.title}</p>
          <p className="text-gray-500">${cart.product.price}</p>
        </div>
        <div className="col-span-1 ">
          <p className="mb-2 px-2">Quantity</p>
          <div className="flex gap-2">
            <button className="border border-black bg-black text-white px-2 rounded-full">
              -
            </button>
            {cart.quantity}
            <button className="border border-black bg-black text-white px-2  rounded-full">
              +
            </button>
          </div>
        </div>
        <div className="col-span-1 ">
          <p className="text-end font-bold text-xl">${cart.cost}</p>
        </div>
      </div>

      {/* mobile width  */}
      <div className="hidden max-[480px]:block">
        <div className="border border-black p-5 grid grid-cols-4  items-center">
          <div className="col-span-1">
            <img src={cart.product.image} className="h-16" alt="" />
          </div>
          <div className="col-span-3">
            <div className="mb-2">
              <p className="font-bold">{cart.product.title}</p>
              <p className="text-gray-500">${cart.product.price}</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-center">
                <p className="p-2">Quantity</p>
                <div className="flex gap-2">
                  <button className="border border-black bg-black text-white px-2 rounded-full">
                    -
                  </button>
                  {cart.quantity}
                  <button className="border border-black bg-black text-white px-2  rounded-full">
                    +
                  </button>
                </div>
              </div>
              <p className="text-end font-bold text-xl">${cart.cost}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
