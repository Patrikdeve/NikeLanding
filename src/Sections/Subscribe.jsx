import React from 'react'

const Subscribe = () => {
  return (
    <div className='flex flex-col gap-10 justify-center items-center' >
        <h1 className='text-4xl  max-sm:text-2xl font-bold  font-montserrat text-center'> Sign Up for 
              <span className='text-coral-red '> Updates </span> 
               & Newsletter
        </h1>
        <div className='w-[95%] border-2 h-[70px] rounded-full flex justify-between items-center px-2 py-2 max-sm:px-0 max-sm:py-5'>
          <input type='text' placeholder='subscribe@nike.com' className='justify-center items-center h-full text-lg max-sm:text-[18px] w-[85%] ml-2  border-none leading-2 outline-none tracking-wide '/>
          <button className='flex justify-center items-center gap-2 px-7 py-5 max-sm:py-4 border font-montserrat
        text-lg max-sm:scale-[0.8] leading-none bg-coral-red rounded-full text-white border-coral-red cursor-pointer'>Sign Up</button>
        </div>
    </div>
  )
}

export default Subscribe
