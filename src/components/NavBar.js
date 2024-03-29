/*
memory leaks: the computors program (like a container) allocates
memory to functions (event listeners/DOM elements) temporarily, 
which will be returned when the function is finished, if its not, 
this is what is called a memory leak, over-time with many memory leaks
this cause increasing memory usage and slower and worse performance 

*/
import React from 'react';
import { useState, useEffect } from 'react'; 
import { Navbar, Container, Nav } from "react-bootstrap"
import logo from '../assets/imgs/logoImg.avif'
import navIcon1 from '../assets/imgs/nav-icon1.svg'
import navIcon2 from '../assets/imgs/nav-icon2.svg'
import navIcon3 from '../assets/imgs/nav-icon3.svg'


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll); // window === webpage. global JS variable

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}> 
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className={scrolled ? "navbar-toggler-icon" : "toggle-not-scrolled navbar-toggler-icon"}></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/joan-milano-3b541b29b/" target="_blank" rel="noreferrer">  <img src={navIcon1} alt="linkedIn link"></img></a>
                    <a href="https://github.com/JoanMilano" target="_blank" rel="noreferrer">  <img src={navIcon2} alt="Github link"></img></a>
                    <a href="https://www.instagram.com/jones_codes/" target="_blank" rel="noreferrer">  <img src={navIcon3} alt="Instagram link"></img></a>
                </div>
                <button className="connect-button"><a  href="#get-in-touch"><span>Let's Connect</span></a></button>
              </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar; 