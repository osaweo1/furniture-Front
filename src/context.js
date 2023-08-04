import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

const appContext=React.createContext()

const url=process.env.REACT_APP_URL

const AppProvider=({children})=>{
    const [user,setUser]=useState('')
    const [path,setPath]=useState('')
    const [userDetails,setUserDetails]=useState({})
    axios.defaults.withCredentials=true
        useEffect(()=>{
            
            const profileFunc=async()=>{
                const response=await axios.get(`${url}/profile`)
                if(response.status===200){
                    console.log(response)
                    setUser(response.data)
                }
            }     
            profileFunc()
        },[])

    useEffect(()=>{
        const profileDetails=async()=>{
            const response=await axios.get(`${url}/profile/${path}`)
            console.log(response)
            if(response.status===200){
                setUserDetails(response.data)
            }else{
                console.log('Error Occured')
            }
        }
        if(path)profileDetails()
        
    
    },[path])
        // console.log(user)
    return(
        <appContext.Provider value={{user,setPath,userDetails}}>
            {children}
        </appContext.Provider>
    )
}

export const useGlobalContext=()=>{
    return(
        useContext(appContext)
    )
}
export {appContext,AppProvider}        