import React from 'react'
import { products } from '../Constants'
import ShoeCard from '../Components/ShoeCard'
import ProductCard from '../Components/ProductCard'


const PopularProducts = () => {
  return (
    <div className=''>
      <h1 className='max-xl:grid-col-3 text-4xl font-bold font-montserrat leading-[50px] mb-6 '> Our
        <span className='text-coral-red  border-black'> Popular </span>
          Products
      </h1>

      <p className='text-l font-montserrat text-slate-gray flex flex-wrap leading-4'>Experience top-notch quality and style with our soungh -after selections. Discover a wordl of a comfort, design and value</p>
       <div className='flex flex-wrap  grid-cols-4 mt-10'> 
            {
              products.map((product, index) => ( 
                <div key={product+index} className='flex  justify-center items-center'><ProductCard product ={product}/></div>
              ))
            }

       </div>
   
    </div>
  )
}

export default PopularProducts
