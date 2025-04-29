import React from 'react'
import featureHero from '../../assets/images/features/hero.jpg'

const FeaturesHero = () => {
  return (
    <div>
        <div className='sm:flex sm:flex-row-reverse'>
            <img src={featureHero} alt="" className='sm:w-[40%] lg:w-[60%] sm:object-cover'/>
            <div className='py-16 px-5 bg-black flex flex-col gap-6 relative hero sm:w-[60%] lg:w-[40%] sm:py-28 md:px-10 lg:px-20 justify-center'>
                <h1 className='text-3xl text-white font-semibold'>FEATURES</h1>
                <p className='text-gray-400'>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>
            </div>
        </div>
    </div>
  )
}

export default FeaturesHero
