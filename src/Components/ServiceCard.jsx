import React from 'react'

const ServiceCard = (props) => {
    const {service} = props; 
    
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] px-10 py-16 shadow-3xl rounded-[20px]'>
        <div className='w-11 h-11 rounded bg-coral-red flex justify-center items-center'>
                <img src = {service.imgURL} alt={service.label} width={24} height={24}/>    
        </div>

        <h1 className='mt-5 font-montserrat font-bold text-2xl'>{service.label}</h1> 
         
         <p className='mt-3 break-words font-montserrat text-slate-gray text-lg leading-normal flex-wrap'>{service.subtext}</p>
        
    
    </div>
  )
}

export default ServiceCard
