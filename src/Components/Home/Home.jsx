import React, {useEffect} from 'react'
import './Home.css'
import './Home.scss'

// Imported Icons
import { AiOutlineSwapRight } from "react-icons/ai";

// Importing the assetss
import Video from '../../Assets/production_id_4763825 (2160p).mp4'
import imag1 from '../../Assets/EastLondon.jpg'
import imag2 from '../../Assets/Gqeberha.jpg'
import imag3 from '../../Assets/tsitsikamma_national_park.jpg'
import imag4 from '../../Assets/camdeboo_national_park.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  
  return (
    <div className='Home'>
      <div className='videoBg'>
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1 data-aos= 'fade-up'>Embark on Unforgettable Adventures!</h1>
        <p data-aos= 'fade-up'>
        Let us guide you on a journey of discovery and wonder. 
        Your next unforgettable adventure starts here.
        </p>
        <button className='btn flex' data-aos= 'fade-up'>GET STARTED <AiOutlineSwapRight className="icon" />
        </button>
      </div>

      <div className='popularPlaces'>
        <div className='content'>
          <h3 data-aos= 'fade-up'>Popular Places</h3>
          <div className='images flex' data-aos= 'fade-up'>
            <img src={imag1} alt='Destination Image' />
            <img src={imag2} alt='Destination Image' />
            <img src={imag3} alt='Destination Image' />
            <img src={imag4} alt='Destination Image' />
          </div>
        </div>
      </div>
    </div>

    
  )
}

export default Home