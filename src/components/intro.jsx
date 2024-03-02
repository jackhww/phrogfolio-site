import React from 'react'

function Intro() {
  return (
    <div className='flex items-center justify-center flex-col text-center h-screen'>
    <h1 className = "text-4xl md:text-7xl mb-1 md:mb-3 font-bold px-3 py-3"> Jack Ho Wan Want </h1>
    <p className = "text-base md:text-xl mb-3 font-medium">Mechatronics Graduate, Embedded Software Engineer</p>
    <p className = "text-sm max-width-xl mb-6 font-bold">This is My Bio</p>
    </div>  
  )
}

export default Intro;