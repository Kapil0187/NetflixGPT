import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-56 px-16 text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2'>{overview}</p>
        <div>
            <button className='text-black bg-white px-12 py-3 mr-2 rounded-lg hover:bg-opacity-80'> Play </button>
            <button className='text-white bg-gray-600 px-12 py-3 ml-2 rounded-lg hover:bg-opacity-80'> More Info </button>
        </div>
    </div>
  )
}

export default VideoTitle
