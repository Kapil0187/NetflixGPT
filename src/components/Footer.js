import React from 'react'


const Footer = () => {
    const list = ["Terms Of Use","Privacy-Policy","About","Blog","FAQ"];
  return (
    <div className='fixed-bottom bg-blue-950 p-10 flex justify-center text-white'>
      <ul className='flex'>
        {list.map((item)=>(<li className='mx-5'>{item}</li>))}
      </ul>
    </div>
  )
}

export default Footer
