import React from 'react'

const Footer = () => {

    const date = new Date().getFullYear();
  return  (
    <footer className='mt-auto'>
      <p className="text-sm text-gray-500 text-center">Copyright © {date} - <a href="https://www.mms-it.com" target='_blank'>MMSIT</a> - All right reserved</p>
    </footer>

  );


}

export default Footer