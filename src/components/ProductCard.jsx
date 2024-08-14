import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import carts from "../data/carts";
const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {

  return (
    <Link to={`/product-detail/${id}`} className="border border-black p-5 flex flex-col items-start gap-5">
      <img src={image} className="h-40" alt="" />
      {/* line-clamp 2 -- it will be appear ... when over 2 lines  */}
      <p className="font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between w-full items-center ">
        <p className="font-bold">${price}</p>
        
        {carts.find((cart) => cart.product.id === id) ? (
          <button className="btn btn-primary bg-black text-white border border-gray-300 px-4 py-1 rounded">
            Added
          </button>
        ) : (
          <button className="btn btn-primary border border-gray-300 px-4 py-1 rounded">
            Add to Cart
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
