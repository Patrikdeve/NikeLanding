import React, {useState} from 'react'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../Constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../Components/ShoeCard'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section id='home' className='w-full flex xl:flex-row flex-col 
    justify-center min-h-screen gap-10 max-container p-2'>

        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
              <p className='text-sl font-montserrat text-coral-red'>Our Summer Collections</p>
              <h1 className='mt-10 font-palanquin leading-[1.3] pt-2 text-8xl max-sm:text-[60px] max-sm:leading-[62px] 
              font-bold '>
                    <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'> The New Arrivals</span>
                      <br />
                      <span className='font-montserrat mr-1 text-coral-red  mt-3 inline-block'> Nike </span>
                        Shoes
               </h1>
               <p className='font-montserrat text-slate-gray font-[500] mt-6 mb-14 text-lg leading-8 '>Discover Stylish Nike Arrivals, quality comfort, and innovation for your active life.</p>
                <Button label="Shop Now" iconUrl = {arrowRight}/>

                <div className='flex flex-row justify-start items-start flex-wrap w-full mt-20 gap-16'>
                        {statistics.map((stat, index) => 
                        <div key = {index} >
                          <p className='font-bold text-4xl font-palanquin '>{stat.value}</p>
                          <p className='font-montserrat text-l text-slate-gray mt-2'>{stat.label}</p>
                        </div>)}
                </div>
        </div>

        <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover'> 
          <img src = {bigShoeImg} alt="shoe collection " width={610} height={600} 
          className='object-contain relative z-10' />
          <div className='flex  sm:gap-6 gap-4 items-center absolute -bottom-[5%] sm:left-[15%] max-sm:px-6 '>
                {
                  shoes.map((shoe, index) => <div key= {shoe+index}>
                    <ShoeCard imgUrl = {shoe} changeBigShoeImg={(shoe) => {setBigShoeImg(shoe)}} 
                    bigShoeImg = {bigShoeImg}
                    />
                  </div>)
                }
        </div> 
       
        </div>

  
    </section>
  )
}

export default Hero
