import React from 'react'
import { services } from '../Constants'
import ServiceCard from '../Components/ServiceCard'

const Services = () => {
  return (
    <div className='flex  max-container justify-center flex-wrap gap-9 '>
        {
          services.map((service, index) => (
            <div key = {service+index}> <ServiceCard service = {service} /> </div>
          ))
        }
    </div>
  )
}

export default Services
