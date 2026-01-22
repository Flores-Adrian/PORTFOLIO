// use useState to store fields from contactForm
import { useState } from "react";
// import fields used for boostrap
import { Container, Row, Col } from "react-bootstrap";
// import images 
import contactImg from "../assets/img/contact-img.svg";


export const Contact = () => {
    // declare initial field states
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    // create state that will store all details that are entered
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    // the submit button will be set to send but when user clicks send, it is 
    // UPDATED to sending so the user can know the API was triggered 
    const [buttonText, setButtonText] = useState('Send');
    // the status is once the api is called, whether it was sent or failed
    const [status, setStatus] = useState({});

    // updates the form detail state that we have so it leaves the other details in tact
    // only updates the field we have specified in the argument (..formDetails is used for this)
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    // create function to submit information
    // TO SEND INFO WE NEED USE MAIL SERVER, we use "node mailer"
    // making request to API
    const handleSubmit = async(e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        // reset button back to "send" after it is clicked
        setButtonText("Send");
        // get the results in json format
        let result = await response.json();
        // after form has been used, reset the information back to default values
        setFormDetails(formInitialDetails);
        // if message is sent sucessfully (200) we change the message to let user know
        // same way would be if it is not able to send
        if (result.code === 200) {
            setStatus({ success: true, message: 'Message sent sucessfully'});
        } else {
            setStatus({ success: false, message: 'Something went wrong, please try again later'});
        }
    };

    // create form, id is to navigate between sections from top header
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2> Get In Touch! </h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1" /** onchange is used to updated our specified state like firstName for ex. */>
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1" /** onchange is used to updated our specified state like firstName for ex. */>
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1" /** onchange is used to updated our specified state like firstName for ex. */>
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1" /** onchange is used to updated our specified state like firstName for ex. */>
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}> </textarea>
                                    <button type="submit" /**{buttonText} is used to update from "send"->"sending" */>
                                        <span>{buttonText}</span>   
                                    </button>
                                </Col>
                                {
                                    // in case we get an error or message is sent sucessfully, we need display
                                    // before user does something, the message would not be displayed

                                    // based on the status, true is successful, false is not successful (if fails then danger; if sends then "sucess")
                                    status.message &&
                                    <Col>
                                        <p className={status.sucess === false ? "danger" : "success"}>
                                            {status.message}
                                        </p>
                                    </Col> 

                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}