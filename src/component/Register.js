import React, { useState } from 'react'

const Register = () => {
    const [values,setValue]=useState({
        fname:'',
        lname:'',
        email:'',
        password:'',
        comfirm_password:''
    })
    console.log(values)
const handelChange=(e)=>{
    setValue({...values,[e.target.name]:e.target.value})
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
            <form className='register-form-form'>
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
            <label htmlFor='password'>Password:</label>
                <input
                    type='password'
                    name='password'
                    value={values.password}
                    onChange={handelChange}
                />  
            
            <label htmlFor='comfirm_password'>Comfirm_Password:</label>
                <input
                    type='password'
                    name='comfirm_password'
                    value={values.comfirm_password}
                    onChange={handelChange}
                />  

            <button>SignUp</button>
        </form>

        </div>
    
    </div>
  )
}

export default Register