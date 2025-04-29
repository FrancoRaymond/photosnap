import React from 'react'
import PricingHeroImage from '../../assets/images/pricing/hero.jpg'

const PricingHero = () => {
  return (
    <div className='sm:flex sm:flex-row-reverse'>
            <img src={PricingHeroImage} alt="" className='sm:w-[40%] lg:w-[60%] sm:object-cover'/>
            <div className='py-16 px-5 bg-black flex flex-col gap-6 relative hero sm:w-[60%] lg:w-[40%] sm:py-28 md:px-10 lg:px-20 justify-center'>
                <h1 className='text-3xl text-white font-semibold'>PRICING</h1>
                <p className='text-gray-400'>Create your stories, Photosnap is platform for photographers and visual storytellers. It's the simple way to create and share your photos.</p>
            </div>
        </div>
  )
}

export default PricingHero
