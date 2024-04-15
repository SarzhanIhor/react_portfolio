import React from 'react'
import { FaSearch, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <section className="contact">
            <div className="container contact-wrapper">
                <form className="contact-form">
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <textarea className="message" placeholder="Message"/>
                    <button className="btn form-btn">Send Message</button>
                </form>
                <div className="contact-adress">
                    <ul>
                        <li className="loc">Address
                            <span>3424 Layman Avenue, Fayetteville, NC</span>
                            <span className="icon">
                            <FaSearch />
                            </span>
                        </li>
                        <li className="phone">Phone
                            <a href="tel:0904141541">(090) 414-1541</a>
                            <span className="icon">
                            <FaPhoneAlt />
                            </span>
                        </li>
                        <li className="email">E-Mail
                            <a href="mailto:devchapter@gmail.com">devchapter@gmail.com</a>
                            <span className="icon">
                            <IoMdMail />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
  )
}

export default Contact