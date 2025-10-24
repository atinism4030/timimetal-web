"use client"
import React from 'react'
import AboutIcons from './AboutIcons'
import Image from 'next/image'
import TeamIcon from '@/public/AboutIcons/team 1.png'
import ProjectIcon from '@/public/AboutIcons/achievement 1.png'
import ExperienceIcon from '@/public/AboutIcons/clock 1.png'
import CheckIcon from '@/public/AboutIcons/check-mark 1.png'
import CountUp from 'react-countup'

const AboutList = () => {

    const AboutList = [
        {
          icon:<Image alt='Team Icon' src={TeamIcon}  />,
          nr:<CountUp end={8} duration={2} />,
          desc:"Expert Team" 
        },
        {
          icon:<Image alt='Project Icon' src={ProjectIcon} />,
          nr:<CountUp end={500} duration={1.5} suffix='+' />,
          desc:"Projects Completed" 
        },
        {
          icon:<Image alt='Experience Icon' src={ExperienceIcon}  />,
          nr:<CountUp end={25} duration={1.5} suffix='+' />,
          desc:"Years Experience" 
        },
        {
          icon:<Image alt='Check Icon' src={CheckIcon} />,
          nr:<CountUp end={100} duration={1.5} suffix='%' />,
          desc:"Safety Rating" 
        }
    ]
  return (
    <div className='grid grid-cols-2 gap-x-75 my-10 w-fit mx-auto ml-25 '>
        {
            AboutList && AboutList.map((icon: any) => (
                <div>
                    <AboutIcons icon = {icon}/>
                </div>
            ))
        }
    </div>
  )
}

export default AboutList