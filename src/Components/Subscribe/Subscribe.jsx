import React, {useEffect} from 'react'
import './Subscribe.css'
import './Subscribe.scss'

// importing pictures
import image1 from '../../Assets/call-removebg-preview.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Subscribe = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='subscribe section container'>
      <div className='secContainer grid'>
        <img src={image1} alt='Div Image' data-aos= 'fade-up' />

        <div className='textDiv'>
          <h4 data-aos= 'fade-up'> Best Way To Start Your Journey!</h4>
          <p data-aos= 'fade-up'>
            We offer personalized itineraries tailored to individual preferences and interest
          </p>
          <button className='btn' data-aos= 'fade-up'>Start Here</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe