import React from 'react'

const Container = ({children}) => {
  return (
    <div className={`w-full md:w-[720px] lg:w-[1000px] mx-auto px-5`}>
        {children}
    </div>
  )
}

export default Container