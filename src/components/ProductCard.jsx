import React from "react";
import Rating from "./Rating";
import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";
// import carts from "../data/carts";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {

  const {carts , addCart} = useCartStore();
  const navigate = useNavigate();

  const handleAddedBtn = (event) => {
    event.stopPropagation();
    toast.success("Item is already in my Cart.")
  }

  const handleOpenDetail = () => {
    navigate(`/product-detail/${id}`);
  }

  const handleAddcartBtn = (event) => {

    event.stopPropagation();

    const newCart = {
      id: Date.now(),
      productId : id,
      quantity: 1,
    };
    addCart(newCart);
  }

  return (
    <div onClick={handleOpenDetail} className="border border-black p-5 flex flex-col items-start gap-5">
      <img src={image} className="h-40" alt="" />
      {/* line-clamp 2 -- it will be appear ... when over 2 lines  */}
      <p className="font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between w-full items-center ">
        <p className="font-bold">${price}</p>
        
        {carts.find((cart) => cart.productId === id) ? (
          <button onClick={handleAddedBtn} className="btn btn-primary bg-black text-white border border-gray-300 px-4 py-1 rounded">
            Added
          </button>
        ) : (
          <button onClick={handleAddcartBtn} className="btn btn-primary border border-gray-300 px-4 py-1 rounded">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
