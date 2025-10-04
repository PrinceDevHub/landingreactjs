import React from 'react'
import AboutBackground from '../assets/about-background.png'
import AboutBackgroundImage from '../assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about-section-container'>
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className='primary-heading'>
            Food is a important part of a balanced diet
        </h1>
        <p className="primary-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Deleniti perferendis accusamus beatae perspiciatis quis saepe harum!
        </p>
        <p className="primary-text">
            Non tincidunt magna non etc elit. Dolor turpis molestie dui magnis facilisi at fringilla quam.
        </p>
        <div className="about-buttons-container">
            <button className='secondary-button'>Learn more</button>
            <button className='watch-video'><BsFillPlayCircleFill/>Watch video</button>
        </div>
      </div>
    </div>
  )
}

export default About
