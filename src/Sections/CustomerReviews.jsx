import React from 'react'
import ReviewCard from '../Components/ReiviewCard'
import { reviews } from '../Constants'

const CustomerReviews = () => {
  return (
    <div className='flex flex-col justify-start items-center'>
        <div  className='flex flex-col flex-wrap items-center gap-2'>
          <h1 className='text-4xl max-sm:text-3xl max-sm:leading-[30px] font-bold font-montserrat tracking-tight
           justify-center text-center
          '>What Our 
            <span className='text-coral-red  mx-2'> Customers </span>
            Say?
           </h1>

          <p className='info-text text-center '>
              Hear genuine stories from our satisfied customers about their
              exceptional experiences with us.
          </p>
        </div>

        <div className='flex  flex-row  flex-wrap max-sm:flex-col gap-10 mt-20'>
              {
                reviews.map((review, index) => (
                  <ReviewCard key={review+index} review = {review}/>
                ))
              }
        </div>
    </div>
  )
}

export default CustomerReviews
