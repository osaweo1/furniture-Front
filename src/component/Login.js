import React, { useState } from 'react'

const Login = () => {
    const [values,setValue]=useState({
        
        email:'',
        password:'',
        
    })
const handelChange=(e)=>{
    setValue({...values,[e.target.name]:e.target.value})
}
  return (
    <div className='register-container'>
    <div className='login-form'>
    <form className='login-form-form'>
   
   
    
    <label htmlFor='email'>Email:</label>
        <input
            type='email'
            name='email'
            value={values.email}
            onChange={handelChange}
            placeholder='Enter Email...'
        />
    <label htmlFor='password'>Password:</label>
        <input
            type='password'
            name='password'
            value={values.password}
            onChange={handelChange}
            placeholder='password'
        />  
    
    

    <button>Login</button>
</form>

</div>
    
        <div className='login-hero'>
            <img src='/image/show/show12.png' alt=''/>
            <div className='register-hero-desc'>
                <p>This is the first step to purchasing satisfaction!</p>
            </div>
        </div>
       
    
    </div>
  )
}

export default Login