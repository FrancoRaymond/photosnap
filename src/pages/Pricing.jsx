import React from 'react'
import PricingHero from '../components/pricing/PricingHero'
import Plans from '../components/pricing/Plans'
import Compare from '../components/pricing/Compare'
import InviteSection from '../components/features/InviteSection'
import ScrollTop from '../components/utils/ScrollTop'

const Pricing = () => {
  return (
    <div className='pt-16 '>
      <ScrollTop />
      <PricingHero />
      <Plans />
      <Compare />
      <InviteSection />
    </div>
  )
}

export default Pricing
