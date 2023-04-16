import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../public/images/logo.png'

const Footer = () => {
    const [navItems, setnavItems] = useState([
        {title: 'Learn from experts', href: '/academy'},
        {title: 'Already an expert', href: '#'},
    ])
  return (
    <div className={`p-5 border-t border-[#e0dede]`}>
        <div>
            <a href={`/`}>
                <Image src={logo} alt='limbo funnels logo' className='w-2/5 sm:w-1/4'/>
            </a>
            <address className='my-2'>support@limbofunnels.com</address>
        </div>
        <footer className='border-t border-[#f7f3f3] text-center'>
            <span>limbofunnels.com. All right reserved.&copy; {new Date().getFullYear()}.</span>
        </footer>
    </div>
  )
}

export default Footer