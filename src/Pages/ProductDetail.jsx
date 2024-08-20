import React from "react";
import { useParams } from "react-router-dom";
// import products from '../data/products';
import Container from "../components/Container";
import Rating from "../components/Rating";
import Breadcrumb from "../components/Breadcrumb";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import { toast } from "react-hot-toast";

const ProductDetail = () => {
  const { products } = useProductStore();
  const { productId } = useParams();
  const currentProduct = products.find((product) => product.id == productId);
  // console.log(currentProduct);


 
  const { carts, addCart } = useCartStore();

  const handleAddedBtn = (event) => {
    event.stopPropagation();
    toast.success("Item is already in my Cart.");
  };
  const handleAddcartBtn = (event) => {
    event.stopPropagation();

    const newCart = {
      id: Date.now(),
      productId: currentProduct.id,
      quantity: 1,
    };
    addCart(newCart);
  };
  return (
    <Container>
      <Breadcrumb currentPageTitle="Product Detail" />
      <div className="border border-gray-500 rounded-lg px-10 py-5 lg:h-[500px] flex items-center">
        <div className="max-[480px]:flex max-[480px]:flex-col gap-5 md:grid grid-cols-2  ">
          <div className="col-span-1">
            <img
              src={currentProduct.image}
              className="h-[200px] md:h-auto md:w-3/4 block md:mx-auto"
              alt=""
            />
          </div>
          <div className="col-span-1 flex flex-col gap-3 items-start">
            <h3 className="text-3xl font-bold">{currentProduct.title}</h3>
            <p className="text-gray-500 bg-gray-200 inline-block">
              {currentProduct.category}
            </p>
            <p className="">{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate} />
            <div className="flex justify-between items-center w-full">
              <p className="text-3xl font-bold">$ {currentProduct.price}</p>
              {carts.find((cart) => cart.productId === currentProduct.id) ? (
                <button
                  onClick={handleAddedBtn}
                  className="btn btn-primary bg-black text-white border border-gray-300 px-4 py-1 rounded"
                >
                  Added
                </button>
              ) : (
                <button
                  onClick={handleAddcartBtn}
                  className="btn btn-primary border border-gray-300 px-4 py-1 rounded"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
