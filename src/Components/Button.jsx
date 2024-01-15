import React from 'react'

const Button = ({label, iconUrl}) => {
  return (
    <div>
        <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat
        text-lg leading-none bg-coral-red rounded-full text-white border-coral-red '>    
            {label}
            <img src = {iconUrl} 
                alt= "arrow-Right-Icon"
                className='ml-2 rounded-full w-5 h-5'
            />
     </button>
    </div>
  )
}

export default Button
