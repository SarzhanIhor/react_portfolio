import React, { useEffect, useState } from 'react'

const Header = () => {
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 1)
      }
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])
    

  return (
    <header className="header">
        <div className={`header-fixed ${isSticky ? "sticky" : ""}`}>
            <div className="container header-wrapper">
                <a href="" className="header-logo">
                    <svg width="40" height="41" viewBox="0 0 40 41" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 0.5C9 0.5 0 9.5 0 20.5C0 31.5 9 40.5 20 40.5C31 40.5 40 31.5 40 20.5C40 9.5 31 0.5 20 0.5ZM11.8 28C9.6 28 7.8 26.2 7.8 24C7.8 21.8 9.6 20 11.8 20C14 20 15.8 21.8 15.8 24C15.8 26.2 14 28 11.8 28ZM28.5 26.9C26.7 28 24.3 27.3 23.2 25.5L17.6 15.8C16.5 14 17.2 11.6 19 10.5C20.8 9.4 23.2 10.1 24.3 11.9L29.9 21.6C31 23.5 30.3 25.9 28.5 26.9Z" />
                    </svg>
                    Ihor
                </a>
                <nav className="nav">
                    {
                        ["Services", "Portfolios", "Experience", "Blog"].map((item, idx) => (
                            <button className="menu-link" key={idx}>
                                {item}
                            </button>
                        ))
                    }
                </nav>
                <div className="header-block">
                    <button className="btn switch-btn"></button>
                    <a href="" className="header-download">Resume</a>
                </div>
                <div className="burger"></div>
            </div>
        </div>
    </header>
  )
}

export default Header