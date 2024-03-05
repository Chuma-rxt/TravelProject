import React from 'react'
import './ContactUs.scss'

const ContactUs = () => {
  return (
    <div className='contact'>
        <div className='textContainer'>
            <h1>Let's Travel Together!</h1>
            <div className='item'>
                <h2>Mail</h2>
                <span>chuma.trans@gmail.com</span>
            </div>
            <div className='item'>
                <h2>Address</h2>
                <span>47 Ahrbeck street Maclear</span>
            </div>
            <div className='item'>
                <h2>Phone</h2>
                <span>+27 733 265 346</span>
            </div>

        </div>
        <div className='formContainer'>
            <form>
                <input type='text' required placeholder='Full Name' />
                <input type='text' required placeholder='Subject' />
                <input type='email' required placeholder='Email' />
                <textarea rows={0} placeholder='Message Us Here!' />
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactUs