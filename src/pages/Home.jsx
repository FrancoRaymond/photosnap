import React from 'react'
import ScrollTop from '../components/utils/ScrollTop'
import Hero from '../components/home/Hero'
import HomeStories from '../components/home/HomeStories'
import HomeFeatures from '../components/home/HomeFeatures'

const Home = () => {
  return (
    <div className='py-12 '>
      <ScrollTop />
      <Hero />
      <HomeStories />
      <HomeFeatures />
    </div>
  )
}

export default Home;
