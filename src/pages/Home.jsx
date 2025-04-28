import React from 'react'
import Hero from '../components/home/Hero'
import HomeStories from '../components/home/HomeStories'
import HomeFeatures from '../components/home/HomeFeatures'

const Home = () => {
  return (
    <div className='py-12 '>
      <Hero />
      <HomeStories />
      <HomeFeatures />
    </div>
  )
}

export default Home;
