import React from 'react'
import './Home.css'
import './Home.scss'

// Imported Icons
import { AiOutlineSwapRight } from "react-icons/ai";

// Importing the assetss
import Video from '../../Assets/video2.mp4'

const Home = () => {
  return (
    <div className='Home'>
      <div className='videoBg'>
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1>Embark on Unforgettable Adventures!</h1>
        <p>
        Let us guide you on a journey of discovery and wonder. 
        Your next unforgettable adventure starts here.
        </p>
        <button>GET STARTED <AiOutlineSwapRight className="icon" />
        </button>
      </div>

      <div className='popularPlaces'>
        <div className='content'>
          <h3>Popular Places</h3>
          <div className='images flex'>
            <img src='' alt='' />
            <img src='' alt='' />
            <img src='' alt='' />
            <img src='' alt='' />
          </div>
        </div>
      </div>
    </div>

    
  )
}

export default Home