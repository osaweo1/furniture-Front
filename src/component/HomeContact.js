import React, { useState } from 'react'

const HomeContact = () => {
    const[ value, setValue]=useState({
        name:'',
        email:'',
        message:''
    })

    const onsubmitContact=(e)=>{
        e.preventDefault()
        console.log(value)
    }


const onchagetext=(e)=>{
    setValue({...value,[e.target.name]:e.target.value})
}

    return (
    <div className='homecontact-container'>
        <div className='homecontact-des'>
            <h2>You have a question?</h2>
            <h2>Feel free to contact us!</h2>
            <ul>
                <li><i class="fa fa-phone-square" aria-hidden="true"></i> <p>+2348032708129</p></li>
                <li><i class="fa fa-whatsapp" aria-hidden="true"></i> <p>+2348032708129</p></li>
                <li><i class="fa fa-map-marker" aria-hidden="true"></i><p>Head Office: 23, Ewa road junction , Ikpoba slope Benin-city,Edo state.</p></li>
                <li><i class="fa fa-map-marker" aria-hidden="true"></i><p>ShowRoom: 144, Ewa road junction , Ikpoba slope Benin-city,Edo state.</p></li>
            
            </ul>
        </div>
        <div className='homecontact-form'>
            <form className='' onSubmit={onsubmitContact}>
            <label htmlFor='name'>Name:</label>
                <input
                className='input'
                    type='text'
                    value={value.name}
                    name='name'
                    onChange={onchagetext}
                />
            <label htmlFor='name'>Email:</label>
                <input
                className='input'
                    type='email'
                    value={value.email}
                    name='email'
                    onChange={onchagetext}
                />
                <label htmlFor='name'>Message:</label>
                <textarea
                    name='message'
                    value={value.message}
                    onChange={onchagetext}
                
                ></textarea>
                    
            <button>Send Message</button>
            
            </form>
        </div>
    
    </div>

  )
}

export default HomeContact