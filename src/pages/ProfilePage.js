import React from 'react'
import { useGlobalContext } from '../context'

const ProfilePage = () => {
    const {userDetails}=useGlobalContext()
    console.log(userDetails)
    
  return (
    <div><h1>{userDetails}</h1></div>
  )
}

export default ProfilePage