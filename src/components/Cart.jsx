import React from "react";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

const Cart = ({ cart:{id,productId,quantity} }) => {
  const {products } = useProductStore();

  const {increaseQuantity , decreaseQuantity,removeCart} = useCartStore();

  const handleIncreaseQuantiy = () => {
    increaseQuantity(id);
  }

  const handleDecreaseQuantity = () => {
    if(quantity > 1){
      decreaseQuantity(id);
    }else{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          removeCart(id);
          toast.success("Item is removed from my cart.");
        }
      });
    }
  }

  const product = products.find(el => el.id === productId);

  const cost = product.price* quantity;

  return (
    <>
      <div className="border border-black p-5 grid grid-cols-6  items-center max-[480px]:hidden">
        <div className="col-span-1">
          <img src={product.image} className="h-16" alt="" />
        </div>

        <div className="col-span-3">
          <p className="mb-2">{product.title}</p>
          <p className="text-gray-500">${product.price}</p>
        </div>
        <div className="col-span-1 ">
          <p className="mb-2 px-2">Quantity</p>
          <div className="flex gap-2">
            <button onClick={handleDecreaseQuantity} className="print:hidden border border-black bg-black text-white px-2 rounded-full">
              -
            </button>
            <span className="print:ml-7">{quantity}</span>
            <button onClick={handleIncreaseQuantiy} className="print:hidden border border-black bg-black text-white px-2  rounded-full">
              +
            </button>
          </div>
        </div>
        <div className="col-span-1 ">
          <p className="text-end font-bold text-xl">${cost}</p>
        </div>
      </div>

      {/* mobile width  */}
      <div className="hidden max-[480px]:block">
        <div className="border border-black p-5 grid grid-cols-4  items-center">
          <div className="col-span-1">
            <img src={product.image} className="h-16" alt="" />
          </div>
          <div className="col-span-3">
            <div className="mb-2">
              <p className="font-bold">{product.title}</p>
              <p className="text-gray-500">${product.price}</p>
            </div>

            <div className="flex justify-between items-end">
              <div className="text-center">
                <p className="p-2">Quantity</p>
                <div className="flex gap-2">
                  <button onClick={handleDecreaseQuantity} className="border border-black bg-black text-white px-2 rounded-full">
                    -
                  </button>
                  {quantity}
                  <button onClick={handleIncreaseQuantiy} className="border border-black bg-black text-white px-2  rounded-full">
                    +
                  </button>
                </div>
              </div>
              <p className="text-end font-bold text-xl">${cost.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
