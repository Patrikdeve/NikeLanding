import React from 'react'

const ShoeCard = ({imgUrl, changeBigShoeImg, bigShoeImg}) => {
 const handleClick  = () => {
    if(bigShoeImg != imgUrl.bigShoe) 
    {
        changeBigShoeImg(imgUrl.bigShoe)
    }
 }
 
    return (
    <div className={`border-2 rounded-xl 
        ${bigShoeImg === imgUrl.bigShoe ? ' border-coral-red' : 'border-transparent'}
        cursor-pointer max-sm:flex-1
    `} onClick = {handleClick}>
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-50 sm:h-50 rounded-xl'>
            <img src = {imgUrl.thumbnail} alt='shoe Collection' width={150} height={150} className='object-contain'/>
        </div>
    </div>
  )
}

export default ShoeCard
