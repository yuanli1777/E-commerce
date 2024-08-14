import React from 'react'

const CategoryButton = ({categoryName ,current}) => {
  return (
    <button className= {`${current ? "bg-black text-white" : "text-gray-500"} btn btn-primary m-1 border border-gray-300 px-4 py-1 rounded text-nowrap`}>
    {categoryName}
  </button>
  )
}

export default CategoryButton