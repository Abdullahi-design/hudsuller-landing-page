import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Nav = () => {
    const [toggleMenu, settoggleMenu] = useState(true)
    const navItems = [
        {title: 'Learn from experts', href: '#'},
        {title: 'Already an expert', href: '#'},
    ]

  return (
    <div className={`flex bg-background text-text-secondary capitalize p-5 font-bold`}>
        <div className='flex justify-between text-3xl px-12 w-full'>
            <a href={`/`}>
                logo
            </a>
            {toggleMenu ? (
                <div>
                    <div className='text-base md:flex hidden gap-3 mt-2'>
                        {
                            navItems.map((navItem, index) => 
                                <a key={index} href={navItem.href} className={`hover:text-button-primary ${index === navItems.length - 1 ? '' : 'border-r px-2'}`}>
                                    <p>{navItem.title}</p>
                                </a>
                            )
                        }
                    </div>
                    <div className='flex md:hidden cursor-pointer bg-transparent rounded-lg mt-2'>
                        <AiOutlineMenu  onClick={() => settoggleMenu(false)} className='w-8 h-6'/>
                    </div>
                </div>
            ):(
                <div>
                    <div className='text-base block md:hidden absolute top-24 bg-white text-text-secondary right-0 h-full w-full p-4'>
                        {
                            navItems.map(navItem => 
                                <a href={navItem.href} className='hover:text-button-primary'>
                                    <p className='py-2'>{navItem.title}</p>
                                </a>
                            )
                        }
                    </div>
                    <div className='flex md:hidden cursor-pointer bg-transparent rounded-lg'>
                        <AiOutlineClose  onClick={() => settoggleMenu(true)} className='w-8 h-6'/>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Nav