import React from 'react'
import Container from './Container';
import { Link } from 'react-router-dom';
import useCartStore from '../store/useCartStore';

const Header = () => {

  const {carts} = useCartStore();

  return (
    <header className='py-5'>
        <Container>
        <div className='flex justify-between items-center'>
            <Link to={"/"} className='text-3xl font-bold'>Online Shop</Link>
            <Link to={"/my-cart"} className='print:hidden border border-black px-4 py-2 relative'>
                My Cart
                <span className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-xs inline-block bg-red-500 text-white px-3 py-1'>{carts.length}</span>
            </Link>
        </div>
        </Container>
    </header>
  );
  
}

export default Header