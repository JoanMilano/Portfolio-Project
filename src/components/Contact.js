/* using 3 mail packages: 
CORS (Cross-Origin Resource Sharing): 
middleware for Express.js (back-end) and 
react (front-end). allows/blocks web. apps.
running on 1 origin/domain to make requests 
to a different origin/domain.

 Exress.js: Web app. framework for Node.js.
 Simplifies back-end development by providing 
 set of features for web and mobile applications. 
 uses: create HTTP server that listens for requests
 and routes them to the appropiate handlers 

 Nodemailer: module for Node.js applications
 that allows you to send emails. provides
  easy-to-use API, supports various email 
  services & protocols. uses: create transporter
 (object responsible for sending mail) and
  sending an email with form data.


 
*/ 


import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'; 
import contactImg from '../assets/imgs/contact-img.svg'; 

export const Contact = () => {
    const formInitialDetails = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    }

const [formDetails, setFormDetails] = useState(formInitialDetails); // changes as user fills out form 
const [buttonText, setButtonText] = useState('Send');  // button default says send button after being clicked changes to sending 
const [status, setStatus] = useState({}); // if or if not message has been send successfully


const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
}

const handleSubmit = async (e) => { // asynchronous programming !!???
    e.preventDefault(); // so page deosnt reload when form is submitted
    setButtonText("Sending...");
    let response = await fetch("http://localhost:3000/contact", { // path to server 
      method: "POST", // sends HTTP POST request to server at ^^
      headers: {
        "Content-Type": "application/json;charset=utf-8", // translates to JSON
      },
      body: JSON.stringify(formDetails), // body is more concise id for the form details. why we need to stringify???
    });

setButtonText("Send"); // when done sending set button back send
 let result = await response.json();
 console.log(response); // waiting for response in json formmat?? 
 setFormDetails(formInitialDetails); // clear form 
 if (result.code === 200) { // code from server when sent successfully 
    setStatus({ success: true, message: 'Message sent successfully.'}); 
 } else { // didnt send back success
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
