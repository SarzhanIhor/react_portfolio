import React from 'react'
import { FaGithub, FaFacebookF, FaLinkedinIn  } from "react-icons/fa";

const Footer = () => {
  const year = new Date()
  return (
    <footer class="footer">
        <div className="hero-social social">
            {
                [<FaGithub />, <FaFacebookF />, <FaLinkedinIn />].map((icon, idx) => (
                    <a href='#' key={idx}>
                        {icon}
                    </a>
                ))
            }
        </div>
        <p class="copyright">© {year.getFullYear()}  -  DevChapter</p>
    </footer>
  )
}

export default Footer