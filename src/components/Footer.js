import { useState } from "react";
import { Nav } from "react-bootstrap"; 
import navIcon1 from '../assets/imgs/nav-icon1.svg'
import navIcon2 from '../assets/imgs/nav-icon2.svg'
import navIcon3 from '../assets/imgs/nav-icon3.svg'

export const Footer = () => {
    const [activeLink, setActiveLink] = useState('home'); 

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)

    }

    return (
        <section className="footer">
              <span className="footer-icons navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/joan-milano-3b541b29b/" target="_blank">  <img src={navIcon1} alt="linkedIn link"></img></a>
                    <a href="https://github.com/JoanMilano" target="_blank">  <img src={navIcon2} alt="Github link"></img></a>
                    <a href="https://www.instagram.com/jones_codes/" target="_blank">  <img src={navIcon3} alt="Instagram link"></img></a>
                </div>
                </span>
                <p>Thank you for your business</p>
                <p>Produced with React, Bootstrap, & Express.</p>
                <p>Email: joan.milano829@gmail.com</p>
                <p>Phone: (530)-313-0357</p>
        </section>
    )
}