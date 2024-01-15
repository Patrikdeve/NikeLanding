import React from 'react'
import { offer, shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <div className=' flex max-lg:flex-col w-full justify-center items-center max-container '>
        <div className='flex-1 justify-center items-center '>
            <h1 className='max-lg:text-3xl max-lg:leading-[40px] text-4xl flex justify-start flex-wrap  font-bold tracking-medium font-montserrat'> 
              <span className=' mr-3 '>We Provide You </span>
              <span className='text-coral-red mr-4 capitalize'>Super Quality </span>
              <span> Shoes </span>
            </h1>

            <p className='font-montserrat text-slate-gray info-text mt-4 max-lg:font-[16px]'>
            Ensuring premium comfort and style, our meticulously crafted footwear
              is designed to elevate your experience, providing you with unmatched
              quality, innovation, and a touch of elegance.
            </p>

            <p className='font-montserrat text-slate-gray mt-8 info-text max-lg:font-[16px]'>
            Our dedication to detail and excellence ensures your satisfaction
            </p>

            <button className='flex cursor-pointer max-lg:mt-10 mt-20 justify-end items-end gap-2 px-7 py-4 border font-montserrat
            text-lg leading-none bg-coral-red rounded-full text-white border-coral-red '> View Details</button>
         </div>

         <div className='flex-1 flex max-lg:mt-5 justify-center  items-center'>
              <img src = {shoe8} alt='superquality Shoe' height={570} width={522} className='object-contain' />
         </div>
    </div>
  )
}

export default SuperQuality
