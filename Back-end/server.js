const express =  require("express"); 
const router = express.Router(); 
const cors = require("cors"); 
const nodemailer = require("nodemailer"); 
const dotenv = require("dotenv"); 

const app = express(); 
app.use(express.json()); 
const allowedOrigins = [
  'http://localhost:3000/',
  'https://dev-milano.com/',
  'https://www.dev-milano.com/',
  'https://dev-milano.netlify.app',
];
app.use(cors());
app.use("/", router); 
dotenv.config();

const PORT = process.env.PORT || 10000 ;
  app.listen(PORT, () => {
    console.log(`Email server listening at http://localhost:${PORT}/`);
  });


app.get('/', (req, res) => {
  res.send('Hello World!')
})



const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // clients email
      pass: process.env.GMAIL_PASS // clients email token key
    },
  });

  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });
  
  router.post("/contact", (req, res) => {
    try {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;

      if (!name || !email || !message || !phone) {
        throw new Error("Incomplete form data"); 
      }

    const mail = {
      from: name,
      to: "joan.milano829@gmail.com", // clients email 
      subject: "Contact Form Submission - Black Salve",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
          console.log("Error sending email", error); 
          res.status(500).json({ code: 500, status: "Error sending email" }); 
        } else {
          res.status(200).json({ code: 200, status: "Message Sent" });
        }
      });
    }   catch (error) {
      console.error("Error processing form data", error); 
      res.status(400).json({ code: 400, status: "Bad Request" }); 
        }
    });
 