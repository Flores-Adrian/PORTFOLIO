// THIS IS WHERE WE DECLARE THE WAY WE WANT THE SERVER
require("dotenv").config();
// declare the packages/modules that were installed
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server that is used to send emails
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

// run on port 5000, open browser localhost to see
app.listen(5000, () => console.log("server Running"));
console.log(process.env.EMAIL_USER);
console.log("EMAIL_USER set?", !!process.env.EMAIL_USER);
console.log("EMAIL_PASSWORD set?", !!process.env.EMAIL_PASSWORD);

// 
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    /* 
     ->Add your own email here
     ->For password, gmail doesn't let you use personal password if 2FA is on
     go to account security, go to application password and create one 
     to add it here
    */
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// this is just to verify if the server is running when you activate server
//  "node server.js"
contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

// make a post rquest, take in request and get all fields that were given
// in a specific format that is in  "mail" to send to ME THE ONE WITH THE WEBSITE
router.post("/contact", (req, res) => {
    const name = `${req.body.firstName} ${req.body.lastName}`.trim();
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: process.env.EMAIL_USER,
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>`,
    };
    // send back if an error or send success code if it works
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});