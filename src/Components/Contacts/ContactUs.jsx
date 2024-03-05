import React from 'react'
import './ContactUs.scss'
import {motion} from "framer-motion"

const varients ={
    initial:{
        y:500,
        opacit:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,

        }
    }
}

const ContactUs = () => {
  return (
    <motion.div className='contact'>
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
    </motion.div>
  )
}

export default ContactUs