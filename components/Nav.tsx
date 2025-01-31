import Image from 'next/image';
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import logo from '../public/images/logo.PNG'
import logo from '../public/images/logo.png'

const Nav = () => {
    const [toggleMenu, settoggleMenu] = useState(true)
    const navItems = [
        {title: 'Home', href: '#home'},
        {title: 'Services', href: '#services'},
    ]

  return (
    <div className={`flex bg-background w-full text-text-secondary capitalize p-5 font-bold`}>
        <div className='flex justify-between text-3xl md:px-12 px-6 w-full'>
            <a href={`/`}>
                <Image src={logo} alt='limbo funnels logo' className='sm:w-1/2 w-3/4'/>
            </a>
            {toggleMenu ? (
                <div>
                    <div className='text-base md:flex hidden gap-3 mt-2'>
                        {
                            navItems.map((navItem, index) => 
                                <a key={index} href={navItem.href} className='px-6 hover:text-button-primary'>
                                    <p>{navItem.title}</p>
                                </a>
                            )
                        }
                    </div>
                    <div className='flex md:hidden cursor-pointer bg-transparent rounded-lg md:mt-2 mt-4'>
                        <AiOutlineMenu  onClick={() => settoggleMenu(false)} className='w-8 h-6'/>
                    </div>
                </div>
            ):(
                <div>
                    <div className='text-base block md:hidden absolute top-20 bg-white text-text-secondary rounded-2xl right-10 h-fit w-fit px-12'>
                        {
                            navItems.map((navItem, index) => 
                                <a key={index} href={navItem.href} className='hover:text-button-primary'>
                                    <p className='py-2'>{navItem.title}</p>
                                </a>
                            )
                        }
                    </div>
                    <div className='flex md:hidden cursor-pointer bg-transparent rounded-lg md:mt-2 mt-4'>
                        <AiOutlineClose  onClick={() => settoggleMenu(true)} className='w-8 h-6'/>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Nav