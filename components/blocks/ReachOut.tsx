import React from 'react'
import Link from 'next/link'
import { SlCalender } from 'react-icons/sl';

const ReachOut = () => {
  return (
    <div className='bg-background h-full py-20'>
      <div className='bg-text-secondary justify-between rounded-2xl text-left lg:flex block md:px-24 mx-5 px-10 py-8'>
        <div className='pb-8 text-white'>
          <h1 className='capitalize text-3xl'>Reach out!</h1>
          <h2 className='text-lg mt-2'>Do you have a business idea that you&apos;d like to discuss?</h2>
          <h2 className='text-lg'>We&apos;d love to hear from you.</h2>
        </div>
        <div className='md:flex block gap-5 md:justify-end lg:my-12'>
          <Link href='https://calendly.com/abdullahismohd3000/how-can-we-help' target='_blank' passHref><button className='cta-button-1 flex gap-2'>
            <span>Book a free consultation</span>
            <SlCalender className='md:w-5 md:h-5 mt-1'/>
          </button></Link>     
        </div> 
      </div>
    </div>
  )
}

export default ReachOut