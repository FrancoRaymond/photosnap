import React from 'react'
import beautifulStories from '../../assets/images/home/desktop/beautiful-stories.jpg'
import createAndShare from '../../assets/images/home/desktop/create-and-share.jpg'
import designedForEveryone from '../../assets/images/home/desktop/designed-for-everyone.jpg'
import arrowWhite from '../../assets/images/shared/arrow-white.svg'
import arrowBlack from '../../assets/images/shared/arrow-black.svg'

const Hero = () => {
  return (
    <div className='w-full '>
        <div className='sm:flex sm:flex-row-reverse'>
            <img src={createAndShare} alt="" className='sm:w-[40%] lg:w-[60%] sm:object-cover'/>
            <div className='py-10 px-5 bg-black flex flex-col gap-6 relative hero sm:w-[60%] lg:w-[40%] sm:py-28 md:px-10 lg:px-20 justify-center'>
                <h1 className='text-3xl text-white font-semibold'>CREATE AND<br/> SHARE YOUR<br/> PHOTO STORIES.</h1>
                <p className='text-gray-400'>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
                <button className='flex gap-5 items-center text-white cursor-pointer'>GET AN INVITE <img src={arrowWhite} alt="" /></button>
            </div>
        </div>
        <div className='sm:flex'>
            <img src={beautifulStories} alt="" className='sm:w-[40%] lg:w-[60%] sm:object-cover'/>
            <div className='py-10 px-5 flex flex-col gap-6 relative sm:w-[60%] lg:w-[40%] sm:py-28 md:px-10 lg:px-20 justify-center'>
                <h1 className='text-3xl text-black font-semibold'>BEAUTIFUL<br/> STORIES<br/>EVERY TIME</h1>
                <p className='text-gray-400'>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
                <button className='flex gap-5 items-center text-black cursor-pointer'>VIEW THE STORIES<img src={arrowBlack} alt="" /></button>
            </div>
        </div> 
        <div className='sm:flex sm:flex-row-reverse'>
            <img src={designedForEveryone} alt="" className='sm:w-[40%] lg:w-[60%] sm:object-cover'/>
            <div className='py-10 px-5 flex flex-col gap-6 relative sm:w-[60%] lg:w-[40%] sm:py-28 md:px-10 lg:px-20 justify-center'>
                <h1 className='text-3xl text-black font-semibold'>DESIGNED FRO<br/>EVERYONE</h1>
                <p className='text-gray-400'>Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.</p>
                <button className='flex gap-5 items-center text-black cursor-pointer'>VIEW THE STORIES <img src={arrowBlack} alt="" /></button>
            </div>
        </div> 
    </div>
  )
}

export default Hero
