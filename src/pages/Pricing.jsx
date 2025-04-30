import React from 'react'
import PricingHero from '../components/pricing/PricingHero'
import Plans from '../components/pricing/Plans'
import InviteSection from '../components/features/InviteSection'



const Pricing = () => {
  return (
    <div className='pt-16 '>
      <PricingHero />
      <Plans />
      <InviteSection />
    </div>
  )
}

export default Pricing
