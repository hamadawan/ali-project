import React from 'react'
import Button from './Button'
import StorefrontButton from './StorefrontButton'
import Image from "next/image";

const SpotlightCard = (props) => {
  return (
    <div data-aos="flip-left" className=' md:flex bg-white rounded-xl rounded-br-xl text-black'>
        <div className=' p-16 text-center md:text-start '>
            <h1 className=' text-[#0860c6] text-2xl mb-7 md:w-96'>{props.title}</h1>
            <h1 className=' text-[26px] text-[#323232] mb-7 md:w-96'>{props.subtitle}</h1>
            <p className=' text-lg mb-7 text-[#0860c6] md:w-96'>{props.overview}</p>
            <StorefrontButton text= {'Create my storefront'} />
        </div>
        <div className=' relative bg-[#26b9f1] rounded-e-xl overflow-hidden pt-10 md:pt-0 flex items-end justify-center'>
            <Image fill src={props.image} alt="" className=' rounded-e-xl z-20' />
            <div className=' md:ml-32 ml-20 absolute bg-[#0000004b] h-64 w-56 md:h-[500px] md:w-[200px] rounded-xl blur-xl'></div>
        </div>
    </div>
  )
}

export default SpotlightCard
