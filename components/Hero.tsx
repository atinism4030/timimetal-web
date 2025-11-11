import React from 'react'
import Image from 'next/image'
import img from "@/public/Background.png"

const Hero = () => {
    return (
        <div>
        <Image alt='Timimetal WorkPlace' src={img} priority />
        </div>
  )
}

export default Hero