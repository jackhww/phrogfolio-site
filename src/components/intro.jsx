import React from 'react'

function Intro() {
  return (
    <div className='flex items-center justify-center flex-col text-center h-screen'>
    <h1 className = "text-4xl md:text-7xl mb-1 md:mb-3 font-bold px-3 py-3"> Jack Ho Wan Want </h1>
    <p className = "text-base md:text-xl mb-3 font-medium"> Cloud Native Engineer </p>
    <p className = "text-sm max-width-xl mb-6 font-bold"> Cloud/Cloud Native Engineer with 1.5 years of formal experience. Previously a Software Dev creating embedded solutions. My main area of expertise lies in Kubernetes and OpenShift. In my free time, I take up some challenging projects to repair and repurpose eWaste so that they don't end up in the landfill!</p>
    </div>  
  )
}

export default Intro;