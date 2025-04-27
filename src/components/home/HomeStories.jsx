import React from 'react'
import whiteArrow from '../../assets/images/shared/arrow-white.svg'
import mountains from '../../assets/images/stories/mountains.jpg'
import cityscapes from '../../assets/images/stories/cityscapes.jpg'
import voyage from '../../assets/images/stories/18-days-voyage.jpg'
import architecturals from '../../assets/images/stories/architecturals.jpg'

const HomeStories = () => {

  return (
    <div className='sm:grid sm:grid-cols-2 md:grid-cols-4'>
        <div className="relative bg-green-700">
            <img src={mountains} alt="" className='w-full'/>
            <div className='story text-white absolute bottom-0 left-0 w-full px-7 py-5 flex flex-col gap-2'>
                <h2 className='text-xl font-semibold'>The mountains</h2>
                <span>by John Appleseed</span>
                <div className='flex justify-between items-center py-3 mt-3 border-t-2 border-gray-400'>
                    <span className='font-semibold'>READ STORY</span>
                    <button><img src={whiteArrow} alt="" /></button>
                </div>
            </div>
        </div>
        <div className="relative bg-green-700">
            <img src={cityscapes} alt="" className='w-full'/>
            <div className=' text-white absolute bottom-0 left-0 w-full px-7 py-5 flex flex-col gap-2 story'>
                <h2 className='text-xl font-semibold'>Sunset Cityscapes</h2>
                <span>by Benjamin Cruz</span>
                <div className='flex justify-between items-center py-3 mt-3 border-t-2 border-gray-400'>
                    <span className='font-semibold'>READ STORY</span>
                    <button><img src={whiteArrow} alt="" /></button>
                </div>
            </div>
        </div>
        <div className="relative bg-green-700">
            <img src={voyage} alt="" className='w-full'/>
            <div className=' text-white absolute bottom-0 left-0 w-full px-7 py-5 flex flex-col gap-2 story'>
                <h2 className='text-xl font-semibold'>18 Days Voyage</h2>
                <span>by Alexei Borodin</span>
                <div className='flex justify-between items-center py-3 mt-3 border-t-2 border-gray-400'>
                    <span className='font-semibold'>READ STORY</span>
                    <button><img src={whiteArrow} alt="" /></button>
                </div>
            </div>
        </div>
        <div className="relative bg-green-700">
            <img src={architecturals} alt="" className='w-full'/>
            <div className=' text-white absolute bottom-0 left-0 w-full px-7 py-5 flex flex-col gap-2 story'>
                <h2 className='text-xl font-semibold'>Architecturals</h2>
                <span>by Samantha Brooke</span>
                <div className='flex justify-between items-center py-3 mt-3 border-t-2 border-gray-400'>
                    <span className='font-semibold'>READ STORY</span>
                    <button><img src={whiteArrow} alt="" /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeStories;
