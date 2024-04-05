import React from 'react'
import { FaHtml5, FaSass, FaCss3Alt, FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiVite } from "react-icons/si";


const Services = () => {
return (
<section className="services">
  <h2 className="services-title inner-title">
    <span className="inner-subtitle">SERVICES</span>
    Specialized in
  </h2>
  <div className="container services-wrapper">
    <div className="services-block">
      <figure className="services-block__icon">
        <FaHtml5 />
      </figure>
      <p className="services-block__title">HTML5</p>
      <p className="services-block__text">Turn what you have in mind of a digital product into reality. For
        any platform you consider.</p>
    </div>
    <div className="services-block">
      <figure className="services-block__icon">
        <FaCss3Alt />
      </figure>
      <p className="services-block__title">CSS3</p>
      <p className="services-block__text">Standard designing, building, and implementing your applications
        with documentation.
      </p>
    </div>
    <div className="services-block">
      <figure className="services-block__icon">
        <FaSass />
      </figure>
      <p className="services-block__title">SCSS</p>
      <p className="services-block__text">Create and maintain your websites and also take care of its
        performance and traffic capacity.</p>
    </div>
    <div className="services-block">
      <figure className="services-block__icon">
        <BiLogoJavascript />
      </figure>
      <p className="services-block__title">JavaScript</p>
      <p className="services-block__text">Can use JavaScript and do a lot with it in your project.</p>
    </div>
    <div className="services-block">
      <figure className="services-block__icon">
        <FaReact />
      </figure>
      <p className="services-block__title">React</p>
      <p className="services-block__text">Full knowledge of HTML.</p>
    </div>
    <div className="services-block">
      <figure className="services-block__icon">
        <SiVite />
      </figure>
      <p className="services-block__title">Vite</p>
      <p className="services-block__text">Full knowledge of HTML.</p>
    </div>
  </div>
</section>
)
}

export default Services