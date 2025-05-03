import React from 'react'
import FeaturesHero from '../components/features/FeaturesHero'
import Benefits from '../components/features/Benefits'
import InviteSection from '../components/features/InviteSection'
import ScrollTop from '../components/utils/ScrollTop'

const Features = () => {
  return (
    <div className='pt-16 '>
      <ScrollTop />
      <FeaturesHero />
      <Benefits />
      <InviteSection />
    </div>
  )
}

export default Features
