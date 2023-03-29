import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { FaRegHandPointDown } from 'react-icons/fa'
import Timer from './Timer'

const Topics = () => {
    const topics = [
        {name: "China Importation", icon: <BsFillPatchCheckFill/>, description:'Learn Over all imporation, import anything', value: 5000 },
        {name: "Turkey Importation", icon: <BsFillPatchCheckFill/>, description:'Learn Over all imporation, import anything', value: 5000},
        {name: "UK Importation", icon: <BsFillPatchCheckFill/>, description:'Import phones and laptops from UK', value: 5000},
        {name: "Import from India and Bangladesh", icon: <BsFillPatchCheckFill/>, value: 5000 },
        {name: "International shipping course", icon: <BsFillPatchCheckFill/>, value:   7000},
        {name: "How to Negotiate with verified sellers", icon: <BsFillPatchCheckFill/>, value: 'Bonus' },
    ]
  return (
    <div>
        <h1 className='academy-header lg:text-4xl text-2xl font-bold academy-header mx-2 mb-4'>What you will learn</h1> 
        <div className='lg:flex block'>
            <div className='block gap-3'>
                {topics.map((topic, index) =>(
                    <div className='flex gap-2 lg:text-2xl text-xl text-[#286900]'>
                        <p>{topic.icon}</p>
                        <div className='block'>
                            <p key={index} className="text-[#000]">{topic.name}</p>
                            <p className="text-[#000000] mx-6">{topic.description}</p>
                            <p className='mx-6 mb-5 font-extrabold'>₦{topic.value}</p>
                        </div>
                    </div>
                ))}
                                
            </div>
            {/* <TbPackageImport className='w-1/3 h-full'/> */}
            <div className="block lg:mx-12 justify-evenly my-5">
                <h1 className='lg:text-5xl text-2xl'>Total cost: <span className='lg:text-5xl text-2xl line-through text-warning'>₦27,000</span> </h1>                
                <div className='my-8'><Timer/></div>
                <h1 className='lg:text-5xl text-2xl'>Special offer: <span className='text-[#509e1f] text-center lg:text-5xl text-2xl text-black'>₦18,999</span></h1>
                <div className='my-8 lg:mx-44 mx-32'><FaRegHandPointDown className='w-20 h-20'/></div> 
                <button className='cta-button-1 text-3xl mt-4 font-bold'>Special OFFER Click Here <br /> <span className='text-lg font-thin'>I want this special offer now</span></button>
            </div>
        </div>
    </div>
  )
}

export default Topics