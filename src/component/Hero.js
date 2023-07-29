import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-text'>
            <h2>Make your Apartment More Beautiful With Elegance and Style.</h2>
            <ul>
                <li><i class="fa fa-check" aria-hidden="true"></i> <p>Great Design</p></li>
                <li><i class="fa fa-check" aria-hidden="true"></i> <p>High Quality Materials</p></li>
                <li><i class="fa fa-check" aria-hidden="true"></i> <p>Lifetime Service Guarantee</p></li>
                <li><i class="fa fa-check" aria-hidden="true"></i> <p>Design With a Perfect Touch</p></li>
            </ul>
            <Link className='hero-explore' to={'/showroom'}>Our Showroom</Link>
        </div>
        <div className='hero-image-div'>
            
            <img src='/image/light.png' alt='' className='hero-image1'/>
            <img src='/image/heroimg.png' alt='' className='hero-image'/>
        
        </div>
        
    
    </div>
  )
}

export default Hero