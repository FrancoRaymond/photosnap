import React from 'react'
import { stories } from '../../assets/data/data'
import whiteArrow from '../../assets/images/shared/arrow-white.svg'

const SubStories = () => {
  return (
    <div className='sm:grid sm:grid-cols-2 md:grid-cols-4'>
        {
            stories.map(story => (
                <div key={story.id} className="relative bg-green-700">
                    <img src={story.image} alt="" className='w-full'/>
                    <div className='story text-white absolute bottom-0 left-0 w-full px-7 py-5 flex flex-col'>
                        <span className='text-gray-300'>{story.date}</span>
                        <h2 className='text-xl font-semibold'>{story.heading}</h2>
                        <span className='text-gray-300'>{story.author}</span>
                        <div className='flex justify-between items-center py-3 mt-3 border-t-2 border-gray-400'>
                            <span className='font-semibold'>READ STORY</span>
                            <button><img src={whiteArrow} alt="" /></button>
                        </div>
                    </div>
                </div>
            ))
        } 
    </div>
  )
}

export default SubStories
