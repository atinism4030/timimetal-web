import React from 'react'
import ServicesList from './ServicesList'

const Services = () => {
  return (
    <div className='bg-gray-200 py-40'>
        <div className='text-black text-6xl flex justify-center pb-5 '><h1>Our Services</h1></div>
        <div className='text-gray-500 text-xl'><p className='flex justify-center'>Comprehensive metal constuction solutuions from design to completion,</p>
        <p className='flex justify-center pb-15' >backend by deacdes of expertise and state-of-art technology</p></div>
        <div className='flex'>
            <ServicesList />
        </div>
    </div>
  )
}

export default Services