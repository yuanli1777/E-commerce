import React from 'react'
import useCategoryStore from '../store/useCategoryStore'

const CategoryButton = ({category:{id,name,isActive}}) => {

  const {activeCategory} = useCategoryStore();

  const handleIsActiveBtn = () => {
    activeCategory(id);
  }
  return (
    <button onClick={handleIsActiveBtn} className= {`${isActive ? "bg-black text-white" : "text-gray-500"} btn btn-primary m-1 border border-gray-300 px-4 py-1 rounded text-nowrap`}>
    {name}
  </button>
  )
}

export default CategoryButton