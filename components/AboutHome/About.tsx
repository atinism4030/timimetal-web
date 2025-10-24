import React from 'react'
import AboutIcons from './AboutIcons'
import AboutList from './AboutList'
import Link from 'next/link'

const About = () => {
  return (
    <div className='bg-gray-200 py-25 '>
    <div className=''>
        <h2 className='text-black text-5xl  flex justify-baselin ml-25  pb-5'>Building Excellence Since 1999</h2>
    </div>
    <div className='text-gray-500 text-xl ml-25'>
        <p>MetalCraft has been at the forefront of metal construction innovation,<br />
           delivering exceptional structural solutions that stand the test of time.<br />
            Our commitment to quality, safety, and client satisfaction has made<br />
             us a trusted partner for projects of all scales.</p>
    </div>
    <div>
        <AboutList />
    </div>
    <div>
      <Link className='bg-blue-400 mx-30 p-3 border rounded-2xl hover:bg-blue-500' href='/about-us'>Learn More About Us</Link>
    </div>
    </div>
  )
}

export default About