import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../Constants'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col gap-5 w-full'>
          <div>
              <a><img src= {footerLogo} height={46} width={150} className='object-contain'/></a>
          </div>
          <p className='text-white font-montserrat mt-5 w-[30%] max-lg:w-[60%] max-sm:w-full tracking-wide'>Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards</p>

          <div className='flex flex-row gap-3 mt-5'>
              {
                socialMedia.map((icon, index) => (
                  <a key={icon+index}><img src={icon.src} alt={icon.alt} className='w-10 h-10 bg-white rounded-full object-contain px-2 py-2'/></a>
                ))
              }
          </div>
      </div>
      <div className='flex flex-row gap-4 flex-wrap max-sm:gap-6 justify-start mt-8 w-full'>
         {
          footerLinks.map((item, index) => (
            <div key={item+index} className='mr-20 max-sm:mr-5 gap-2 flex flex-col'> 
                <h1 className='text-white font-montserrat font-bold text-xl tracking-wide  '>{item.title}</h1>
                {
                  item.links.map((link, index) => (
                    <a>
                      <p className='text-white font-montserrat '
                      >
                        {link.name}</p>
                      </a>
                  ))
                }
            </div>  
          ))
         }
      </div>
    </div>
  )
}

export default Footer
