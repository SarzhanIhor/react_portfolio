import React from 'react'
import { FaGithub, FaFacebookF, FaLinkedinIn  } from "react-icons/fa";
import image from "../assets/images"

const Hero = () => {
  return (
    <section className="hero">
            <div className="container hero-wrapper">
                <div className="hero-content">
                    <span className="inner-subtitle hero-subtitle">MY NAME IS</span>
                    <h1 className="hero-title">Alex <span>Smith.</span></h1>
                    <p className="hero-text">Creative front-end developer with more than +5 years of experience in
                        enterprise companies and startups. Proficient in JavaScript, Angular, and React. Passionate
                        about UI/UX</p>
                    <div className="hero-social">
                        {
                            [<FaGithub />, <FaFacebookF />, <FaLinkedinIn />].map((icon, idx) => (
                                <a href='#' key={idx}>
                                    {icon}
                                </a>
                            ))
                        }
                    </div>
                </div>
                <figure className="hero-img"><img src={image.heroImg} alt=""/></figure>
            </div>
        </section>
  )
}

export default Hero