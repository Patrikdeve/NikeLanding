import React from 'react'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'

const SpecialOffer = () => {
  return (
    <div  className='flex max-lg:flex-col-reverse flex-wrap shadow-4xl '>
      <div className='flex flex-1 justify-center items-center'>
          <img src={offer} alt='Offer Image' width={773} height={687} className='object-contain w-full'/>
      </div>
      <div className=' flex flex-wrap flex-col flex-1 items-start mt-10'>
          <h1 className='font-montserrat text-4xl font-bold'>
              <span className='text-coral-red'>Special </span>
              Offer
          </h1>
          <p className=' mt-6 info-text flex-wrap'>
              Embark on a shopping journey that redefines your experience with
              unbeatable deals. From premier selections to incredible savings, we
              offer unparalleled value that sets us apart.
          </p> 
          <p className=' info-text flex-wrap  mt-10'>
              Navigate a realm of possibilities designed to fulfill your unique
              desires, surpassing the loftiest expectations. Your journey with us is
              nothing short of exceptional.
          </p>
          <div className=' mt-20 max-lg:mt-10 max-lg:mb-10 flex max-lg:flex-col flex-wrap gap-4'>
              <Button label='View Details' iconUrl={arrowRight}/>
              <button className='rounded-full py-3 px-8 border-2 border-slate-gray info-text hover:bg-coral-red cursor-pointer hover:text-white hover:border-red-400'>Learn More</button>
          </div>
      </div>
    </div>
  )
}

export default SpecialOffer
