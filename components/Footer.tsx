import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../public/images/logo.png'

const Footer = () => {
  return (
    <div className={`p-5 border-t border-[#f0f3f3] bg-background text-text-secondary`}>
        <footer className='text-center'>
            <span>Limbo Funnels - All Right Reserved &copy; {new Date().getFullYear()}.</span>
        </footer>
    </div>
  )
}

export default Footer