import React from 'react';
import navIcon1 from '../assets/imgs/nav-icon1.svg'
import navIcon2 from '../assets/imgs/nav-icon2.svg'
import navIcon3 from '../assets/imgs/nav-icon3.svg'
import footerImg from '../assets/imgs/footerImg.avif'

export const Footer = () => {
    return (
        <section className="footer">
              <div className="social-icon social-footer">
                    <a href="https://www.linkedin.com/in/joan-milano-3b541b29b/" target="_blank" rel="noreferrer">  <img src={navIcon1} alt="linkedIn link"></img></a>
                    <a href="https://github.com/JoanMilano" target="_blank" rel="noreferrer">  <img src={navIcon2} alt="Github link"></img></a>
                    <a href="https://www.instagram.com/jones_codes/" target="_blank" rel="noreferrer">  <img src={navIcon3} alt="Instagram link"></img></a>
                    </div>
                <div className='footer-text'>
                <p>Thank you for your business</p>
                <p>Produced with React, Bootstrap, & Express</p>
                <p>Tested with jest, lighthouse, and more</p>
                <p>Checkout my <a href='https://github.com/JoanMilano' target="_blank" rel="noreferrer" className='github-link'>github</a> for all my projects. </p>
                <p>Email: joan.milano829@gmail.com</p>
                <p>Phone: (530)-313-0357</p>
                </div>
                <img src={footerImg} alt="footer-design-img" ></img>
        </section>
    )
}