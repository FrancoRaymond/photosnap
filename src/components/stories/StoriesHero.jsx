import React from 'react'
import whiteArrow from '../../assets/images/shared/arrow-white.svg'

const StoriesHero = () => {

  return (
    <div className="storiesBackground">
      <div className='py-24 flex flex-col gap-5 px-2 sm:pl-5 md:pl-10 lg:pl-24'>
        <h3 className='text-gray-200'>LAST MONTH'S FEATURED STORY</h3>
        <h2 className='text-5xl text-white font-semibold'>HAZY FULL<br/>MOON OF<br/>APPALACHIA</h2>
        <span className=' text-gray-300'>March 2nd 2020 <strong className='text-white'>by John Appleseed</strong></span>
        <p className='max-w-[400px] text-gray-300'>The dissected plateau area, While not actually made up of geological mountains, is popularly called "mountains", especially in eastern kentucky and West Virginia, and while the ridge are not high, the terrain is extremely rugged.</p>
        <button className='flex gap-5 items-center cursor-pointer'>
          <span className='font-semibold text-white'>READ THE STORY</span>
          <img src={whiteArrow} alt=""/>
        </button>
      </div> 
    </div>
  )
}

export default StoriesHero;
