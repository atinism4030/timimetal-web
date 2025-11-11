import React from 'react'
import { ContactInfo } from './ContactInfo'
import RequestQuote from './RequestQuote'

const GetInTouch = () => {
  return (
    <div className='bg-gray-100 py-33'>
        <div className='py-15'>
        <h2 className="text-black text-6xl flex justify-center pb-5">Get In Touch</h2>
        <p className="text-gray-500 text-xl flex justify-center ml-25">Ready to start your project? Contact us for a free consultation and quote. Our expert team is here to bring your vision to life.</p>
        </div>

        <div className='text-black flex justify-around'>
            <ContactInfo />
            <RequestQuote />
        </div>
    </div>
  )
}

export default GetInTouch