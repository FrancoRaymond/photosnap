import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/shared/logo-white.svg'
import facebook from '../../assets/images/shared/facebook.svg'
import youtube from '../../assets/images/shared/youtube.svg'
import twitter from '../../assets/images/shared/twitter.svg'
import pinterest from '../../assets/images/shared/pinterest.svg'
import instagram from '../../assets/images/shared/instagram.svg'
import arrowWhite from '../../assets/images/shared/arrow-white.svg'

const Footer = () => {
  return (
    <div className='bg-black py-10 px-2 sm:px-5 md:px-10 lg:px-24 md:flex md:gap-10 lg:gap-20'>
        <div className='flex flex-col gap-7 min-w-44 items-center mx-auto w-fit md:items-start md:justify-between'>
            <img src={logo} alt="" className='w-40'/>
            <ul className='flex gap-3'>
                <li><a href=""><img src={facebook} alt="fb icon"/></a></li>
                <li><a href=""><img src={youtube} alt="yt icon" /></a></li>
                <li><a href=""><img src={twitter} alt="twitter icon" /></a></li>
                <li><a href=""><img src={pinterest} alt="pinterest icon" /></a></li>
                <li><a href=""><img src={instagram} alt="insta icon" /></a></li>
            </ul>
        </div>
        <ul className='flex flex-col gap-3 text-white text-center mt-10 md:mt-0 md:grow md:w-full md:text-left'>
            <li className='hover:text-gray-400'><Link to="/">Home</Link></li>
            <li className='hover:text-gray-400'><Link to="/stories">Stories</Link></li>
            <li className='hover:text-gray-400'><Link to="/features">Features</Link></li>
            <li className='hover:text-gray-400'><Link to="/pricing">Pricing</Link></li>
        </ul> 
        <div className='mt-16 flex flex-col gap-7 items-center md:mt-0 min-w-64 md:items-end md:justify-between'>
            <button className='flex gap-5 items-center text-white cursor-pointer'>GET AN INVITE <img src={arrowWhite} alt="" /></button>
            <span className='text-gray-400'>Copyright 2019.All Rights Reserved</span>
        </div> 
    </div>
  )
}

export default Footer;