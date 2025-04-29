import React from 'react'
import ScrollTop from '../components/utils/ScrollTop'
import StoriesHero from '../components/stories/StoriesHero'
import SubStories from '../components/stories/SubStories'


const Stories = () => {
  return (
    <div className='pt-16'>
      <ScrollTop />
      <StoriesHero />
      <SubStories />
    </div>
  )
}

export default Stories;
