import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-full aspect-video absolute pt-56 px-6 md:px-16 text-white bg-gradient-to-r from-black'>
        <h1 className='-mt-36 md:mt-0 text-3xl md:text-5xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/2'>{overview}</p>
        <div >
            <button className='text-black bg-white md:px-12 md:py-3 py-2 px-10 md:mr-2 mt-4 rounded-lg hover:bg-opacity-80'> Play </button>
            <button className='hidden md:inline-block text-white bg-gray-600 px-12 py-3 ml-2 rounded-lg hover:bg-opacity-80'> More Info </button>
        </div>
    </div>
  )
}

export default VideoTitle
