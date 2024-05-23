import Link from 'next/link'
import React from 'react'

const HomeHero = () => {
  return (
    <div id='home' className='text-center font-extrabold bg-background text-text-secondary lg md:p-32 p-24 px-8'>
      <h1 className='lg:text-5xl text-2xl text-text-secondary capitalize'>The best technology partner to grow your business</h1>
      <p className='sm:text-xl text-lg font-normal text-[#727171] mt-3'>We are a team of software engineers and business experts who have decades of experience in designing software solutions, educating and developing teams, handling client relations, and taking companies to market. We can take you from concept to deployment with minimal stress and timeline interruption.</p>
        <div className='md:py-16 py-8'>
        <Link href={'https://calendly.com/abdullahismohd3000/how-can-we-help'}>
          <button className='cta-button'>Let&apos;s talk</button>
        </Link>
      </div>
    </div>
  )
}

export default HomeHero