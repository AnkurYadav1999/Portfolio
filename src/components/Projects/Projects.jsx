import React from 'react'
import './Projects.css'
import projectImg from '../../images/download.jpg'
import projectImg1 from '../../images/download1.jpg'
import projectImg2 from '../../images/download2.jpg'

const Projects = () => {
  return (
    <div className='projects-section' id='projects'>
      <h2>Projects</h2>
      <div className='projects-info'>
        <div className='project-card'>
          <img src={projectImg} alt='project-pic'/>
          <h3>Project 1</h3>
          <p>This project is about xyz tech where i implemented xyz feature and handled frontend and DB part of this project </p>
          <h4>Tech Used - <span className='tech-used'>ABC</span> <span className='tech-used'>XYZ</span> <span className='tech-used'>PQR</span> </h4>
          <div className='btn-group'>
            <button className='project-btn live'>Live Link</button>
            <button className='project-btn git'>GitHub Link</button>
          </div>

        </div>

        <div className='project-card'>
          <img src={projectImg1} alt='project-pic'/>
          <h3>Project 2</h3>
          <p>This project is about xyz tech where i implemented xyz feature and handled frontend and DB part of this project </p>
          <h4>Tech Used - <span className='tech-used'>ABC</span> <span className='tech-used'>XYZ</span> <span className='tech-used'>PQR</span> </h4>
          <div className='btn-group'>
            <button className='project-btn live'>Live Link</button>
            <button className='project-btn git'>GitHub Link</button>
          </div>

        </div>

        <div className='project-card'>
          <img src={projectImg2} alt='project-pic'/>
          <h3>Project 3</h3>
          <p>This project is about xyz tech where i implemented xyz feature and handled frontend and DB part of this project </p>
          <h4>Tech Used - <span className='tech-used'>ABC</span> <span className='tech-used'>XYZ</span> <span className='tech-used'>PQR</span> </h4>
          <div className='btn-group'>
            <button className='project-btn live'>Live Link</button>
            <button className='project-btn git'>GitHub Link</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects