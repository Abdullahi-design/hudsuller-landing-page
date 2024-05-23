import Image from 'next/image'
import React from 'react'
import Coding from '../public/svgs/coding.svg'
import OutSourcing from '../public/svgs/outsourcing.svg'
import Settings from '../public/svgs/settings.svg'
import BusinessConsultaton from '../public/svgs/businessConsultaton.svg'
import Growth from '../public/svgs/growth.svg'
import ReachOut from './blocks/ReachOut'

const WhatWeDo = () => {

  const expertises = [
    {title: "Software Development", description: "We are competent in building scalable, secure and stable end-to-end systems in the cloud and on-premises", alt: "Software Development", icon: Coding},
    {title: "Outsourcing", description: "We help you stay focused your core business while we manage the complex technical aspects of your operations.", alt: "Outsourcing", icon: OutSourcing},
    {title: "Business Consulting", description: "We help businesses improve their online presence and connect with customers using social media. Our experts create content and drive traffic to your website using proven strategies.", alt: "Business Consulting", icon: BusinessConsultaton},
    {title: "Growth Partner", description: "We help businesses grow by providing expert guidance and support. We work closely with clients to find growth opportunities, develop strategies to take advantage of them, and provide ongoing support for success.",alt: "Growth Partner", icon: Growth},
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
        expertises.map((expertise, index) => (
          <div key={index} className='p-5'>
            <Image src={expertise.icon} alt={expertise.alt} className='text-center justify-center mx-auto w-24 h-24'/>
            <h1 className='lg:text-3xl text-xl text-text-secondary capitalize my-3 mt-8'>{expertise.title}</h1>
            <p className='sm:text-xl text-lg font-normal text-[#727171]'>{expertise.description}</p>
          </div>
        ))
      }
      </div>
      <ReachOut/>
    </div>
  )
}

export default WhatWeDo