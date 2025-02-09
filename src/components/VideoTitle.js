import React from 'react'

const VideoTitle = ( {title , overview}) => {
  return (
    <div className='w-screen aspect-video pt-36  px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>

        <div className=''>
            <button className='bg-white text-black p-4 px-16 text-xl font-bold hover:bg-opacity-70 rounded-lg'>Play</button>
            <button className='bg-gray-500 text-white p-4 px-11 text-xl bg-opacity-50 hover:bg-opacity-60 rounded-lg mx-3'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle