import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='w-1/2 mx-auto h-screen flex items-center'>
        <div className='text-center'>
            <h1 className='5xl font-bold'>404 Not Found</h1>
            <p className='w-96'>The page you are looking for does not exist</p>
            <Link to={"/"} className='btn btn-primary underline hover:text-blue-400'>Go Home</Link>
        </div>
    </section>
  )
}

export default ErrorPage