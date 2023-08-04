import React, { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const Register = () => {
    const url=process.env.REACT_APP_URL
    console.log(url)
    const [values,setValue]=useState({
        fname:'',
        lname:'',
        email:'',
        password:'',
        comfirm_password:''
    })
    console.log(values)
    const [validation,setValidation]=useState(false)
    const [error,setError]=useState(false)

    const validationCheck=(values)=>{
        let error={}
        
        let email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        let password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

        if(values.email===''){
            error.email='Email field cannot be empty'
        }
        else if(!email_pattern.test(values.email)){
            error.email='Not a valid email address'
        }
        if(values.password===''){
            error.password='Password field cant be empty'

        } 
        else if(!password_pattern.test(values.password)){
            error.password='Password must be more than 8 charater,        at least a Caps and a digit'
        }

        if(values.comfirm_password!==values.password){
            error.comfirm_password='Password do not match'
        }
        else if(values.comfirm_password===''){
            error.comfirm_password='Password field cant be empty'
        }
        return error
    }
const handelChange=(e)=>{
    setValue({...values,[e.target.name]:e.target.value})
    
    
}

const onsubmit=async(e)=>{
    e.preventDefault()
    setValidation(validationCheck(values))
    if(validation){
       const response= await axios.post(`${url}/register`,values)
       if(response){
        console.log(response)
       }
    }
    
    
    
    
}
  return (
    <div className='register-container'>
    
        <div className='register-hero'>
            <img src='/image/show/show12.png' alt=''/>
            <div className='register-hero-desc'>
                <p>This is the first step to purchasing satisfaction!</p>
            </div>
        </div>
        <div className='register-form'>
            <form className='register-form-form' onSubmit={onsubmit}>
            <label htmlFor='fname'>First Name:</label>
                <input
                    type='text'
                    name='fname'
                    value={values.fname}
                    onChange={handelChange}
                />
            <label htmlFor='lname'>Last Name:</label>
                <input
                    type='text'
                    name='lname'
                    value={values.lname}
                    onChange={handelChange}
                />
            
            <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={handelChange}
                />
           {validation.email && <p>{validation.email}</p>}
            <label htmlFor='password'>Password:</label>
                <input
                    type='password'
                    name='password'
                    value={values.password}
                    onChange={handelChange}
                />  
                {validation.password &&<p>{validation.password}</p>}
            
            <label htmlFor='comfirm_password'>Comfirm_Password:</label>
                <input
                    type='password'
                    name='comfirm_password'
                    value={values.comfirm_password}
                    onChange={handelChange}
                />  
                {validation.comfirm_password &&<p>{validation.comfirm_password}</p>}

            <button>SignUp</button>
            <p className='already'>Already have an account <Link to={'/login'}>Login</Link></p>
        </form>
        

        </div>
    
    </div>
  )
}

export default Register