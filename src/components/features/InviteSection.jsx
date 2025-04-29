import React from 'react'
import arrowWhite from '../../assets/images/shared/arrow-white.svg'

const InviteSection = () => {
  return (
    <div className="bg-[url('src/assets/images/features/bg-beta.jpg')] flex flex-col gap-10 px-5 md:px-10 lg:px-24 sm:flex-row sm:justify-between sm:items-center py-16 md:py-20 bg-top-0 bg-cover bg-no-repeat bg-center">
        <h2 className='text-white text-4xl md:text-5xl font-semibold'>We’re in beta.<br/>Get your invite<br/>today!</h2>
        <button className='flex gap-5 items-center text-white cursor-pointer'>GET AN INVITE <img src={arrowWhite} alt="" /></button>
    </div>
  )
}

export default InviteSection;