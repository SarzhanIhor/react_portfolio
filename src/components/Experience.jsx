import React, {useState} from 'react'


const Experience = () => {
  const [activeTab, setActiveTab] = useState(0)

  const selectTab = (index) => {
    setActiveTab(index)
  }
  

  return (
    <section className="experience container">
            <div className="experience-job">
                <span className="inner-subtitle">CAREER PATH</span>
                <h2 className="inner-title experience-title">Work Experices
                </h2>
                <ul className="experience-list">
                    <li onClick={() => selectTab(0)} className={`experience-item ${activeTab === 0 ? "active" : "" }`}>Apple</li>
                    <li onClick={() => selectTab(1)} className={`experience-item ${activeTab === 1 ? "active" : "" }`}>Microsoft</li>
                    <li onClick={() => selectTab(2)} className={`experience-item ${activeTab === 2 ? "active" : "" }`}>Facebook</li>
                    <li onClick={() => selectTab(3)} className={`experience-item ${activeTab === 3 ? "active" : "" }`}>Slack</li>
                </ul>
            </div>
            <div className="experience-details">
                <div className={activeTab === 0 ? "experience-tab active" : "experience-tab"}>
                    <h3 className="experience-tab-title">Front-end Developer</h3>
                    <span className="experience-city">California, United States</span>
                    <span className="experience-data">Nov 2020 - Present</span>
                    <ul className="experience-language">
                        <li>Swift</li>
                        <li>Go</li>
                    </ul>
                    <ul className="experience-details-list">
                        <li>Improving overall website performance for mobile users.
                        </li>
                        <li>Collaborate with back-end developers and web designers to improve usability
                        </li>
                        <li>Add voice search feature for mobile app.</li>
                        <li>Developing an admin panel to manage contents, users, products and ...
                        </li>
                    </ul>
                </div>
                  <div className={activeTab === 1 ? "experience-tab active" : "experience-tab "}>
                    <h3 className="experience-tab-title">Front-end Developer</h3>
                    <span className="experience-city">California, United States</span>
                    <span className="experience-data">Nov 2020 - Present</span>
                    <ul className="experience-language">
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <ul className="experience-details-list">
                        <li>Improving overall website performance for mobile users.</li>
                        <li>Collaborate with back-end developers and web designers to improve usability</li>
                        <li>Add voice search feature for mobile app.</li>
                        <li>Developing an admin panel to manage contents, users, products and ...</li>
                    </ul>
                </div>
                  <div className={activeTab === 2 ? "experience-tab active" : "experience-tab "}>
                    <h3 className="experience-tab-title">Front-end Developer</h3>
                    <span className="experience-city">California, United States</span>
                    <span className="experience-data">Nov 2020 - Present</span>
                    <ul className="experience-language">
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                    <ul className="experience-details-list">
                        <li>Improving overall website performance for mobile users.</li>
                        <li>Collaborate with back-end developers and web designers to improve usability</li>
                        <li>Add voice search feature for mobile app.</li>
                        <li>Developing an admin panel to manage contents, users, products and ...</li>
                    </ul>
                </div>
                  <div className={activeTab === 3 ? "experience-tab active" : "experience-tab "}>
                    <h3 className="experience-tab-title">Front-end Developer</h3>
                    <span className="experience-city">California, United States</span>
                    <span className="experience-data">Nov 2020 - Present</span>
                    <ul className="experience-language">
                        <li>Node</li>
                        <li>Mongo</li>
                    </ul>
                    <ul className="experience-details-list">
                        <li>Improving overall website performance for mobile users.</li>
                        <li>Collaborate with back-end developers and web designers to improve usability</li>
                        <li>Add voice search feature for mobile app.</li>
                        <li>Developing an admin panel to manage contents, users, products and ...</li>
                    </ul>
                </div>
            </div>
        </section>
  )
}

export default Experience