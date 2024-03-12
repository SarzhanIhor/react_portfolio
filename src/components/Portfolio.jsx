import React from 'react'
import Slider from 'react-slick'
import { sliders } from '../constants/sliders'

const Portfolio = () => {
  const settings = {
    infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  }
  const next = () => {
    this.Slider.slickNext();
  }
  const previous = () => {
    this.Slider.slickPrev();
  }
  return (
    <section className="portfolio container">
            <span className="inner-subtitle">MY WORKS</span>
            <h2 className="inner-title">Featured Portfolios
            </h2>
            <>
              <button onClick={previous} classNameName="btn btn-prev btn-slider slick-arrow active"></button>
              <button onClick={next} classNameName="btn btn-next btn-slider slick-arrow"></button>
              </>
            <Slider {...settings} className="portfolio-slider slider">
              {
                sliders.length > 0 ? (
                  sliders.map(slider => (
                    <div classNameName='slider-block' key={slider.id}>
                      <figure>
                        <img src={slider.image} alt={slider.title} />
                        <figcaption>
                          <span classNameName="slider-title">{slider.title}</span>
                          <span classNameName="slider-descript">{slider.descript}</span>
                          <a href="" classNameName="slider-link">{slider.icon}</a>
                        </figcaption>
                      </figure>
                    </div>
                  ))
                ): (
                  <p></p>
                )
              }
                {/* <div className="slider-block">
                    <div className="slider-wrapper">
                        <figure>
                            
                            <figcaption>
                                <span className="slider-title">landing page</span>
                                <span className="slider-descript">html css jquery
                                    <a href="" className="slider-link">
                                      
                                            </a>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="slider-block">
                    <div className="slider-wrapper">
                        <figure>
                            <img src="img/portfolio-2.jpg" alt="">
                            <figcaption>
                                <span className="slider-title">landing page</span>
                                <span className="slider-descript">html css jquery
                                    <a href="" className="slider-link"><svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 640 512" width="24" height="24">
                                            <path
                                                d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                                            </svg></a>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="slider-block">
                    <div className="slider-wrapper">
                        <figure>
                            <img src="img/portfolio-3.jpg" alt="">
                            <figcaption>
                                <span className="slider-title">landing page</span>
                                <span className="slider-descript">html css jquery
                                    <a href="" className="slider-link"><svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 640 512" width="24" height="24">
                                            <path
                                                d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                                            </svg></a>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="slider-block">
                    <div className="slider-wrapper">
                        <figure>
                            <img src="img/portfolio-2.jpg" alt="">
                            <figcaption>
                                <span className="slider-title">landing page</span>
                                <span className="slider-descript">html css jquery
                                    <a href="" className="slider-link"><svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 640 512" width="24" height="24">
                                            <path
                                                d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                                            </svg></a>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                </div> */}
            </Slider>
        </section>
  )
}

export default Portfolio