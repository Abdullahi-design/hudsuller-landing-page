import Link from 'next/link'
import React from 'react'
import TakeAways from './block/TakeAways'

const HomeHero = () => {
  return (
    <div className='text-center font-extrabold bg-background text-text-secondary md:p-26 p-6 w-full h-screen'>
      <h1 className='sm:text-5xl text-2xl capitalize'>Learn One Thing, get really good at it: Our Expert Instructors Will Teach You How!</h1>
      {/* <h2 className='sm:text-4xl text-2xl capitalize py-2'>Our Expert Instructors Will Teach You How!</h2> */}
      <p className='sm:text-2xl text-xl font-thin mt-3'>Our team of experts are people who are really good at what they love to do. They will teach you how to focus on one thing and get really good at it too. With our online courses, you will learn from the best and get the skills you need to be great at what you want to do.</p>
      <div className='md:py-16 py-8'>
        <Link href={'/academy'}>
          <button className='cta-button'>Join a master class Now {`>>`}</button>
        </Link>
        <TakeAways/>
      </div>
    </div>
  )
}

export default HomeHero