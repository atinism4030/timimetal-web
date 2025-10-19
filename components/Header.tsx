import Image from 'next/image'
import React from 'react'
import img from "@/public/file.svg"

const Header = () => {
  return (
    <div>
        <Image alt='alti' src={img} />
    </div>
  )
}

export default Header