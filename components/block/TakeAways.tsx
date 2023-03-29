import Link from 'next/link'
import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs';

const TakeAways = () => {
    const takeAways = [
        {title: 'Learn from real life experts', icon: <BsFillPatchCheckFill className='w-5 h-5'/> },
        {title: 'Become Something you love', icon: <BsFillPatchCheckFill className='w-5 h-5'/> },
        {title: 'Market, Sell, And Deliver Like A Pro', icon: <BsFillPatchCheckFill className='w-5 h-5'/> },
    ]
  return (
    <div className='md:flex hidden text-text-secondary justify-center gap-8'>
        {
            takeAways.map((takeAway, index) => (
                <div key={index} className='flex gap-3'>
                    <p className='text-button-primary'>{takeAway.icon}</p>
                    <p>{takeAway.title}</p>
                </div>
            ))
        }
    </div>
  )
}

export default TakeAways