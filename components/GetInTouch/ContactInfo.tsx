import React from 'react'
import PhoneIcon from '@/public/GetInTouchIcons/phone-call 1.png'
import MailIcon from '@/public/GetInTouchIcons/mail 1.png'
import AdrressIcon from '@/public/GetInTouchIcons/pin 1.png'
import TimeIcon from '@/public/GetInTouchIcons/clock 1 (1).png'
import Image from 'next/image'

export const ContactInfo = () => {
  return (
    <div className=''>
    <div className='font-bold text-4xl '>
        <h2>Contact Info</h2>
    </div>

    <div className='py-10'>
        <div className='flex gap-4 py-10'>
            <div className='bg-blue-300 p-2 flex justify-center w-18 h-18 rounded-2xl '>
            <Image alt='PhoneIcon' src={PhoneIcon} width={40} />
            </div>
            <div>
            <h2 className='text-2xl font-bold py-1'>Phone</h2>
            <h2 className='text-gray-600'>+389 70209553</h2>
            </div>
        </div>
        <div className='flex gap-4 py-10'>
            <div className='bg-blue-300 p-2 flex justify-center w-18 h-18 rounded-2xl '>
            <Image alt='MailIcon' src={MailIcon}  width={40} height={30}/>
            </div>
            <div>
            <h2 className='text-2xl font-bold py-1'>Email</h2>
            <h2 className='text-gray-600'>info@timimetal.com</h2>
            </div>
        </div>
        <div className='flex gap-4 py-10'>
            <div className='bg-blue-300 p-2 flex justify-center w-18 h-18 rounded-2xl '>
            <Image alt='AdrressIcon' src={AdrressIcon}  width={40} height={30}/>
            </div>
            <div>
            <h2 className='text-2xl font-bold py-1'>Address</h2>
            <h2 className='text-gray-600'>+389 70209553</h2>
            </div>
        </div>
        <div className='flex gap-4 py-10'>
            <div className='bg-blue-300 p-2 flex justify-center w-18 h-18 rounded-2xl '>
            <Image alt='TimeIcon' src={TimeIcon}  width={40} height={30}/>
            </div>
            <div>
            <h2 className='text-2xl font-bold py-1'>Bussiness Hours</h2>
            <h2 className='text-gray-600'>Mon-Fri</h2>
            </div>
        </div>
    </div>

    </div>
  )
}
