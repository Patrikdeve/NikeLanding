import React from 'react'
import { star } from '../assets/icons';

const ReviewCard = (props) => {
    const {review} = props;
  return (
    <div className='flex flex-col justify-center items-center w-[550px] max-sm:w-full'>
        <div >
                <img  src={review.imgURL} alt='customer image' width={150} height={150} className='object-contain rounded-full'/>
        </div>
        <div className='text-center flex flex-col  justify-center items-center mt-4 '>
            <p className='info-text flex flex-wrap'>
                {review.feedback}
            </p>
            <div className='flex flex-row gap-2 mt-1'>
                <img src={star}/>
                <span className = 'info-text'>(4.5)</span>
            </div>
        </div>
        <h1 className='font-montserrat font-bold text-2xl tracking-tight mt-3 w-full flex flex-wrap justify-center'>{review.customerName}</h1>
    </div>
  )
}

export default ReviewCard
