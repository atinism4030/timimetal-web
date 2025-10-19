import React from 'react'
import Image from 'next/image'

const ServiceCard = ({service}:any) => {
  return (
    <div className=' max-w-sm p-6 min-h-50 border border-b-gray-100 rounded-3xl shadow-sm hover:bg-gray-300
     bg-white '>
        <div className='bg-blue-200 w-12 justify-center items-center  flex rounded-xl gap-2'>{service.icon}</div>
        <h1 className='mb-2 text-2xl font-bold tracking-tight text-black
        '>{service.title}</h1>
        <p className='font-normal text-gray-700 '>{service.desc}</p>

    </div>
  )
}

export default ServiceCard