import React from 'react'
import './Hero.css'
import profile_img from "/Users/sugatathawale/Downloads/My-portfolio-main/src/assets/yash2.jpg";

import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Yash Dhore,</span> frontend developer</h1>
      <p>I am a frontend developer from India , Build Hand to Hand projects</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
          <a id='resum' href="https://drive.google.com/drive/folders/1PLULFBtxRPRYA0XeNNSv1j0QVHiKsrXF?usp=sharing" target="_blank" rel="noopener noreferrer">
            My Resume
          </a>
        </div>

      </div>
    </div>
  )
}

export default Hero
