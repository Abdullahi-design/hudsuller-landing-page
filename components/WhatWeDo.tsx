import Image from 'next/image'
import React from 'react'
import Coding from '../public/svgs/coding.svg'
import OutSourcing from '../public/svgs/outsourcing.svg'
import Settings from '../public/svgs/settings.svg'
import FunnelBuilding from '../public/svgs/funnelBuilding.svg'
import Growth from '../public/svgs/growth.svg'
import Socialmediaadvertising from '../public/svgs/socialmediaadvertising.svg'
import ReachOut from './blocks/ReachOut'

const WhatWeDo = () => {

  const expertises = [
    {title: "Software Development", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.", alt: "Software Development", icon: Coding},
    {title: "Funnel Marketing", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.", alt: "Funnel Marketing", icon: FunnelBuilding},
    {title: "Social media marketing", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.", alt: "Social media marketing", icon: Socialmediaadvertising},
    {title: "Growth Partner", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.", alt: "Growth Partner", icon: Growth},
    {title: "Outsourcing", description: "We help you stay focused your core business while we manage the complex technical aspects of your operations.", alt: "Outsourcing", icon: OutSourcing},
    {title: "ERP systems", description: "We build custom ERP systems for businesses and meet the unique needs of growing organizations.", alt: "ERP systems", icon: Settings},
    // {title: "Process Automation", description: "", alt: "Process Automation", icon: Rewiring},
    // {title: "Advertising", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.", alt: "Advertising", icon: Advertising},
  ]
  return (
    <div id='services' className='text-center font-extrabold bg-background'>
      <h1 className='sm:text-2xl text-xl uppercase text-button-primary'>What we do</h1>
      <p className='lg:px-72 md:px-24 px-8 sm:text-lg text-md text-[#727171] mt-3'>We specialize in providing marketing services to help businesses expand their reach and achieve their goals. </p>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-14'>
      {
        expertises.map(expertise => (
          <div className='p-5'>
            <Image src={expertise.icon} alt={expertise.alt} className='text-center justify-center mx-auto w-24 h-24'/>
            <h1 className='lg:text-3xl text-xl text-text-secondary capitalize my-3 mt-8'>{expertise.title}</h1>
            <p className='sm:text-xl text-lg font-thin text-[#727171]'>{expertise.description}</p>
          </div>
        ))
      }
      </div>
      <ReachOut/>
    </div>
  )
}

export default WhatWeDo