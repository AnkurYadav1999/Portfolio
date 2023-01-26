import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home-section' id='home'>
    <div className='home-info'>
        <div className='home-heading'>
            <h2>Hi, I am John Doe <br/> Welcome to my Website.</h2>
            <h3>Hope you have good day</h3>
        </div>
        <div className='social-links'>
          <button className='btn'>Linkedin</button>
          <button className='btn'>Facebook</button>
          <button className='btn'>Twitter</button>
        </div>
    </div>
    </div>
  )
}

export default Home