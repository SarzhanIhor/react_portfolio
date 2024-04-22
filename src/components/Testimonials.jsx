import React from 'react'
import { testimonials } from '../constants/data'
import Slider from 'react-slick'

const Testimonials = () => {
  const settings = {
    infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    speed: 500,
    arrows: false
  }
  return (
    <section className="testimonials container">
            <span className="testimonials-subtitle inner-subtitle">MY CLIENTS</span>
            <h2 className="testimonials-title inner-title">Testimonials</h2>
            <Slider className='testimonials-slider slick-initialized slick-slider slick-dotted' {...settings}>
              {
                testimonials.length > 0 ? (
                  testimonials.map(element => {
                    const {id, image, name, job, text} = element
                    return (
                      <div className="slider-block" key={id}>
                          <div className="slider-wrapper">
                              <figure className="testimonials-img">
                                  <img src={image} alt={name}/>
                              </figure>
                              <p className="testimonials-text">{text}
                              </p>
                              <span className="testimonials-name">{name}</span>
                              <span className="testimonials-job">{job}</span>
                          </div>
                      </div>
                    )
                  })
                  ): (
                    <p></p>
                  )
              }
            </Slider>
            
        </section>
  )
}

export default Testimonials