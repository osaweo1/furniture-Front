import React from 'react'
import HomeContact from './HomeContact'
import ShowComp from './ShowComp'
import Brief from '../component/Brief'

const Show = () => {
  return (
    <div className='show-container'>
        <Brief/>
        <ShowComp/>
        <HomeContact/>
    </div>
  )
}

export default Show