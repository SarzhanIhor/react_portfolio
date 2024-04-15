import React from 'react'

const Skills = () => {
  return (
    <section className="skills container">
            <span className="skills-subtitle inner-subtitle">LEARNING PATH</span>
            <h2 className="skills-title inner-title">Education & Skills</h2>
            <div className="skills-wrapper">
                <div className="skills-edu">
                    <ul>
                        <li>Kingston university</li>
                        <li>Master's degree - Software Engineering</li>
                        <li>2019 - 2021</li>
                    </ul>
                    <ul>
                        <li>Kingston university</li>
                        <li>Bachelor's degree - Computer Engineering</li>
                        <li>2015 - 2019</li>
                    </ul>
                    <ul>
                        <li>Westminster School</li>
                        <li>Diploma's degree - Mathematics</li>
                        <li>2013 - 2015</li>
                    </ul>
                </div>
                <div className="skills-block">
                    <p className="skills-desc">For 5+ years, I have been continuously learning in the field of front-end and
                        experimenting with new technologies and frameworks, and here you can see a summary of my skills.
                    </p>
                    <p className="skills-experience">
                        <span className="skills-title-exp">html 5</span>
                        <span className="skills-line html"></span>
                    </p>
                    <p className="skills-experience">
                        <span className="skills-title-exp">css 3</span>
                        <span className="skills-line css"></span>
                    </p>
                    <p className="skills-experience">
                        <span className="skills-title-exp">React</span>
                        <span className="skills-line scss"></span>
                    </p>
                    <p className="skills-experience">
                        <span className="skills-title-exp">JS</span>
                        <span className="skills-line jquery"></span>
                    </p>
                </div>
            </div>
        </section>
  )
}

export default Skills