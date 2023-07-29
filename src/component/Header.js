import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
const[menu,setMenu]=useState(false)

const handlemenuopen=()=>{
    setMenu(true)
}
const handlemenusclose=()=>{
    setMenu(false)
}
  return (
    <div className='header'>

        <div className='logo'>
            <Link to={'/'}>
                <i className='fa fa-home' aria-hidden="true"></i>
                <h1 className='logo-h1'>Standard <span className='logo-span'>Furniture</span></h1>
            </Link>
        </div>
        <div className={menu?'nav navmove':'nav'}>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/showroom'}>Our Showroom</Link></li>
                <li><Link to={'/about'}> About Us</Link></li>
                <li><Link to={'/contact'}> Contact us</Link></li>
                <li><Link to={'/login'}> Login</Link></li>
                <li><Link to={'/register'}> Sign Up</Link></li>
            
            
            </ul>
        </div>
        <div className='menu-container'>
        {
            menu ?
            <i onClick={handlemenusclose}class="fa fa-times" aria-hidden="true"></i>
            :
            
            <i onClick={handlemenuopen} class="fa fa-bars menu" aria-hidden="true"></i>
        }
        </div>
        

    </div>
  )
}

export default Header