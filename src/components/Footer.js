import React from 'react'


const Footer = () => {
    const list = ["Terms Of Use","Privacy-Policy","About","Blog","FAQ"];
  return (
    <div className='fixed-bottom z-20 bg-blue-950 p-10 flex justify-center text-white w-full'>
      <ul className='flex'>
        {list.map((item)=>(<li className='mx-5'>{item}</li>))}
      </ul>
    </div>
  )
}

export default Footer
