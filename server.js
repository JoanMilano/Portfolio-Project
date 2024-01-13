/* 
server file used to send the form the 
user inputs in portfolio to my email 

general questions: 
1. how deos this backend server run in relation to my front-end web app?

bugs: 
server running check === not running 

JSON (Javascript Object Notation): both
user & computer can read, turned into a string 
then back to JS object b4 executed
*/
console.log("Starting server...");
// importing modules we are using
const express = require("express"); // Express.js main library
const router = express.Router(); // allows me to define routes 
const cors = require("cors"); // implementing middleware for handling requests from dif origins
const nodemailer = require("nodemailer"); // library for sending emails using Node.js


// set up express and middleware 
const app = express(); // constant to apply express 
app.use(cors());
app.use(express.json()); // parses incoming JSON data into JS 
app.use("/contact", router); // defines a route 
app.listen(3000, () => console.log("Server Running")); // listen on port 3000, logs message indicating server is running

// email address that emails will be sent to
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "joan.milano829@gmail.com", // use own account
      pass: "jones_M_$@471012" // create application password in gmail (if 2-factor-authentication)
    },
  });

  // verify if its running
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });
  
  // formatting darta from body to mail formatt  
  router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
      from: name,
      to: "joan.milano829@gmail.com",
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };

    // express server sends email via node mailer
    contactEmail.sendMail(mail, (error) => {
        if (error) {
          res.json(error);   //.json(error); // if its error we send back error
        } else {
          res.json({ code: 200, status: "Message Sent" }); // if successful send verification code and status = Message Sent 
        }
      });
    });
