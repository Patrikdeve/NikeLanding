import React from 'react'
import {star} from './../assets/icons'

const ProductCard = ({product}) => {
  return (
    <div className=' mr-2 mb-4 flex flex-col justify-center hover:scale-[1.1] cursor-pointer'>
      <img src={product.imgURL} alt='Shoe' width = {200} height = {200} />
      <div className='flex mx-2  relative'> 
        <img  src={star} className='scale-[0.8]'/>
        <span className='mx-2 text-l font-montserrat text-slate-gray'> (4.5)</span>
        </div>

        <h1 className='mx-3 font-bold text-[18px] font-montserrat flex flex-wrap whitespace-nowrap text-ellipsis w-[100%] '>{product.name}</h1>
        <h1 className='mx-3 font-bold text-xl font-montserrat mt-2 text-coral-red'>{product.price}</h1>
    </div>
  )
}

export default ProductCard
