import React from 'react'
import { features } from '../../assets/data/data'

const Benefits = () => {
  return (
    <div className='py-20 lg:py-24 grid grid-cols-1 gap-16 md:grid-cols-3 md:px-5'>
        {
            features.map(feature => (
                <div key={feature.id} className='flex flex-col gap-5 text-center'>
                    <div className='size-24 mx-auto flex items-center'>
                        <img src={feature.icon} alt="" className='w-24'/>
                    </div>
                    <h2 className='text-lg font-bold'>{feature.heading}</h2>
                    <p className='text-gray-400 max-w-[500px] mx-auto'>{feature.discription}</p>
                </div>
            ))
        }
    </div>   
  )
}

export default Benefits

