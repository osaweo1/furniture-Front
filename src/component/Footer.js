import React, { useState } from 'react'

const Footer = () => {
  const d=new Date()

  const [value,setValue]=useState('')
  // console.log( d.getFullYear())


  const onchangefoot=(e)=>{
    setValue(e.target.value)
  }

  const onsubmitNewsletter=(e)=>{
    e.preventDefault()
    console.log(value)
  }
  return (
    <div className='footer-container'>
      <div className='designs'><p>Get Info on our new designs</p></div>
      <div className='newsletter'>

        
        <form onSubmit={onsubmitNewsletter}>
        
          <input
            type='email'
            value={value}
            name='email'
            onChange={onchangefoot}
            placeholder='Enter Email Address...'
          
          />
          <button>Sign Up</button>
        
        </form>
        
      
      </div>
      
        <div className='foot'>
        
            @ Copy Right  Faraday Tech (2023 - { d.getFullYear()})
        </div>
    </div>
  )
}

export default Footer