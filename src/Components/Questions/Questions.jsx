import React, { useState } from 'react'
import './Questions.css'
import './Questions.scss'
import Accordion from './Accordion';

const Questions = () => {
  const [active, setActive] = useState("How do I choose the right travel destination for me?");
  return (
    <div className='questions section container'>
      <div className='secHeading'>
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className='secContainer grid'>
        <div className='accordion grid'>
          <Accordion 
           title="How do I choose the right travel destination for me?"
           desc="Think on your hobbies, spending limit, ideal experiences,
           and preferred surroundings. Look at places that offer 
           attractions or activities you find intriguing and that fit your preferences."
           active={active}
           setActive={setActive}
          />

          <Accordion
           title="What are the best times to visit specific destinations?"
           desc="Research the climate, weather patterns, and peak tourist seasons of the
           destination you're interested in. Opt for the shoulder seasons when the weather
           is pleasant, and crowds are fewer, if possible."
           active={active}
           setActive={setActive}
          />

          <Accordion
           title="How  can I find budget-friendly travel options and deals?"
           desc="Look for travel deals, discounts on transport's and accommodations, 
           and consider using travel apps or webistes that offer competitive prices. Being 
           flexible with your travvel dates can also help yioou find better deals."
           active={active}
           setActive={setActive}
          />

          <Accordion
           title="What essential items should i pack for my adventure?"
           desc="Pack appropriate clothing, toileries, travel documents (passport, id, visa,
            etc) essential medications, and any specific gear needed for your adventure
            (e.g hiking boots, snorkeling gear)."
           active={active}
           setActive={setActive}
          />
             
        </div>

        <div className='form'>
          <div className='secHeading'>
            <h4>Do you have any specific question?</h4>
            <p>
              Please complete the form below, and a member of our
              committed team will contact you as soon as possible.
            </p>
         </div>

         <div className='formContent grid'>
          <input type='email' placeholder='Enter email address' />
          <textarea placeholder='Enter your question here'></textarea>
          <button className='btn'>Submit Inquiry</button>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Questions