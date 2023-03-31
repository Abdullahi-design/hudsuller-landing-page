import Link from 'next/link'
import React from 'react'

const Offer = () => {
  return (
    <div className='text-center p-4 z-30 bg-[#08262c] opacity-100 sm:text-sm text-xs text-warning w-full sticky top-0'>
      <Link href={`/academy`}>
        <div className=' capitalize font-extrabold md:flex gap-1 justify-center'>⏳Limited Time: <p className=' underline decoration-button-primary hover:text-button-primary'> Save Big With the new Advanced Importation class</p></div>
      </Link>
    </div>
  )
}

export default Offer