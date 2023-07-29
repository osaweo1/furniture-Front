import React from 'react'
import Hero from '../component/Hero'
import Brief from '../component/Brief'
import MiniShowRoom from '../component/MiniShowRoom'
import HomeContact from '../component/HomeContact'

const HomePage = () => {
  return (
    <div className='homePage-container'>
        <Hero/>
        <Brief/>
        <MiniShowRoom/>
        <HomeContact/>
    
    </div>
  )
}

export default HomePage