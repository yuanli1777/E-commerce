import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`${className} w-full md:w-[720px] lg:w-[1200px] mx-auto`}>
        {children}
    </div>
  )
}

export default Container