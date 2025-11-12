import React from 'react'

const AboutIcons = ({icon}:any) => {
  return (
    <div className='flex flex-col items-center justify-centerl p-1 w-48 h-64 mx-auto'>
        <div className='bg-blue-200 flex justify-center items-center rounded-xl w-24 h-24 mb-3'>
            {icon.icon}
        </div>
        <div className='mb-2 flex justify-center  text-2xl font-bold tracking-tight text-black
        '>
            {icon.nr}
        </div>
        <div className='font-normal flex justify-center text-gray-700'>
            {icon.desc}
        </div>
    </div>
  )
}

export default AboutIcons