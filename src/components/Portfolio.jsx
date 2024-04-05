import React, {useState} from 'react'
import Slider from 'react-slick'
import { sliders } from '../constants/sliders'
import images from '../assets/images'
import { FaLink } from "react-icons/fa6";

const Portfolio = () => {
  const [activeButton, setActiveButton] = useState(null);
  const customSlider = React.createRef()
  const settings = {
    infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  }
  const next = () => {
    customSlider.current.slickNext();
    setActiveButton('next'); // Установка кнопки next как активной
  };
  const previous = () => {
    customSlider.current.slickPrev();
    setActiveButton('prev'); // Установка кнопки prev как активной
  };
  return (
    <section className="portfolio container">
            <span className="inner-subtitle">MY WORKS</span>
            <h2 className="inner-title">Featured Portfolios
            </h2>
            <>
            <button onClick={previous} className={`btn btn-prev btn-slider slick-arrow ${activeButton === 'prev' ? 'active' : ''}`}>
              <img src={images.leftArrow} alt="arrow" />
              </button>
              <button onClick={next} className={`btn btn-next btn-slider slick-arrow ${activeButton === 'next' ? 'active' : ''}`}>              
              <img src={images.rightArrow} alt="arrow" />
              </button>
              </>
            <Slider {...settings} ref={customSlider} className="portfolio-slider slider">
              {
                sliders.length > 0 ? (
                  sliders.map(slider => (
                    <div className='slider-block' key={slider.id}>
                      <div className="slider-wrapper">
                        <figure>
                          <img src={slider.image} alt={slider.title} />
                          <figcaption>
                            <span className="slider-title">{slider.title}</span>
                            <span className="slider-descript">{slider.descript}
                            <a href="" className="slider-link"><FaLink /></a></span>
                          </figcaption>
                        </figure>
                      </div>
                      
                    </div>
                  ))
                ): (
                  <p></p>
                )
              }
            </Slider>
        </section>
  )
}

export default Portfolio