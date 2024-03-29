
import React from 'react';
import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'; 
import contactImg from '../assets/imgs/ContantImg.avif'; 

export const Contact = () => {
    const formInitialDetails = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    }
const [formDetails, setFormDetails] = useState(formInitialDetails); 
const [buttonText, setButtonText] = useState('Send');  
const [status, setStatus] = useState({}); 


const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
}

const handleSubmit = async (e) => {
    e.preventDefault(); 
    setButtonText("Sending...");
    let response = await fetch("https://portfolio-project-ffy1.onrender.com/contact", { // path to server 
      method: "POST", 
      headers: {
        "Content-Type": "application/json;charset=utf-8", 
      },
      body: JSON.stringify(formDetails), 
    });

setButtonText("Send"); 
 let result = await response.json();
 console.log(response); 
 setFormDetails(formInitialDetails); 
 if (result.code === 200) { 
    setStatus({ success: true, message: 'Message sent successfully.'}); 
 } else { 
    setStatus({ success: false, message: 'Something went wrong.' })
 }
};  
        return (
            <section className="contact" id="get-in-touch">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <img src={contactImg} alt="Get in Touch"/>
                        </Col>
                        <Col md={6}>
                            <h2>Get In Touch</h2> 
                            <form onSubmit={handleSubmit} id="contact-form">
                                <Row>
                                    <Col sm={6} className="px-1">
                                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                    </Col>
                                    <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                    </Col>
                                    <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                    </Col>
                                    <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                    </Col>
                                    <Col>
                                     <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    </Col>
                                    <Row>
                                    <Col>
                                    <button type="submit"><span>{buttonText}</span></button>
                                    {
                                        status.message && 
                                        <Col>
                                         <p className={`alert ${status.success === false ? 'alert-danger' : 'alert-success'}`}>{status.message}</p>
                                        </Col>
                                    }
                                    </Col>
                                    </Row>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        ) 
        
    }
