import React from 'react'
import { useParams } from 'react-router-dom';
import products from '../data/products';
import Container from '../components/Container';
import Rating from '../components/Rating';
import Breadcrumb from '../components/Breadcrumb';


const ProductDetail = () => {

    const {productId} = useParams();
    const currentProduct = products.find((product) => product.id == productId);
    // console.log(currentProduct);

  return (

    <Container>
        <Breadcrumb currentPageTitle= "Product Detail" />
        <div className='border border-gray-500 rounded-lg p-5'>
            <div className='max-[480px]:flex max-[480px]:flex-col gap-5 md:grid grid-cols-2 h-[80%] '>
                <div className='col-span-1'>
                    <img src={currentProduct.image} className='w-3/4 block mx-auto' alt="" />
                </div>
                <div className='col-span-1 flex flex-col gap-3 items-start'>
                    <h3 className='text-3xl font-bold'>{currentProduct.title}</h3>
                    <p className='text-gray-500 bg-gray-200 inline-block'>{currentProduct.category}</p>
                    <p className=''>{currentProduct.description}</p>
                    <Rating rate = {currentProduct.rating.rate}/>
                    <div className='flex justify-between items-center w-full'>
                        <p className='text-3xl font-bold'>$ {currentProduct.price}</p>
                        <button className='btn btn-primary border border-gray-300 px-4 py-1 rounded'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </Container>
    
    
  )
}

export default ProductDetail