import Link from 'next/link'
import React from 'react'

const HomeHero = () => {
  return (
    <div id='services' className='text-center font-extrabold bg-background text-text-secondary lg md:p-32 p-24 px-8 w-full h-screen'>
      <h1 className='lg:text-5xl text-2xl capitalize'>Partner with Us to Expand Your Reach and <br /> Achieve Your Business Goals</h1>
      <p className='sm:text-xl text-lg font-thin text-[#727171] mt-3'>We specialize in expanding your reach and helping you connect with more customers. With our expert guidance and proven strategies, you can grow your business and reach new heights of success. Our tailored services are designed to meet your unique needs and help you accomplish your objectives. Partner with us today and take your business to the next level!</p>
      <div className='md:py-16 py-8'>
        <Link href={'https://calendly.com/d/ysb-n27-wrc/how-can-we-help?month=2023-04'}>
          <button className='cta-button'>Let&apos;s talk</button>
        </Link>
      </div>
    </div>
  )
}

export default HomeHero