import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { appContext, useGlobalContext } from '../context'
import axios from 'axios'

const Header = () => {
const url=process.env.REACT_APP_URL
const[menu,setMenu]=useState(false)
const[profile,setProfile]=useState(false)
const {user,setPath}=useGlobalContext(appContext)
// console.log(user._id)
const {id}=useParams()
console.log(id)
const handlemenuopen=()=>{
    setMenu(true)
}
const handlemenusclose=()=>{
    setMenu(false)
}

const handleProfile=()=>{
    setProfile(!profile)
}

useEffect(()=>{
    setPath(id)
})

const handleLogout=async()=>{
    const res=await axios.get(`${url}/logout`)
    if(res.status===200){
        window.location.href='/'
    }
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
               {user ? <div className='cartuser'>
                    <li><i class="fa fa-shopping-cart" aria-hidden="true"></i></li>
                    <li><i onClick={handleProfile} class="fa fa-user proICon" aria-hidden="true"></i></li>
                    </div>  
                :
                <div className='reglog'>
                <li><Link to={'/login'}> Login</Link></li>
                <li><Link to={'/register'}> Sign Up</Link></li>
                </div>
                 
            }
            <div className={profile ?'profile dis':'profile'}>
            <li><Link to={`/profile/${user._id}`}>@{user.first_name}</Link></li>
            <li onClick={handleLogout}> Logout</li>
        </div> 
           
                
            
            
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