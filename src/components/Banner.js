// useEffect is used when typing or deleting animation is effected for animation 
import { useState, useEffect } from "react";
// import elements from bootstrap
import { Container, Row, Col } from "react-bootstrap";
/** THIS IS TO IMPORT THE SPECIFIC BOOTSTRAP ICONS I WILL BE USING*/
import { ArrowRightCircle } from "react-bootstrap-icons";

// import header
import headerImg from "../assets/img/header-img.svg"
import astroImg from "../assets/img/astronaut_mainPicture.png";
import aot_Titan from "../assets/img/aot-Titan.png";

// import animation.css and react on screen to track if user is on section
import 'animate.css';
import TrackVisibility from "react-on-screen";

/* start off with adding text, structure, and image*/
export const Banner = () => {
    // this will be for the index as to which word is currently being displayed
    const [loopNum, setLoopNum] = useState(0);
    // this checks if the word is being typed out of deleted, FALSE B/C it is typing
    const [isDeleting, setIsDeleting] = useState(false);
    // TITLES I WANT TO BE DISPLAYED
    const toRotate = [ "Software Engineer", "Data Analyst", "Web Developer" ];
    // this is to know the portion of the word that is being displayed
    const [text, setText] = useState('');
    // how fast the letters are being typed
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    // how much time passes between one extra word being typed out
    const period = 200;

    // this is a FUCNTION FOR useEffect, this is responsible for typing/deleting
    useEffect(() => {
        let ticker = setInterval(() => {
            // check if we can delete the word faster than being typed out
            // delta is used when tick is being used
            tick();
        }, delta)

        // we use the interval every time the [text] gets updated
        return () => { clearInterval(ticker)};
    }, [text])

    // this will define the tick function
    const tick = () => {
        // this is so that when we reach the end of rotation, we can rotate back to the start
        let i = loopNum % toRotate.length;
        // keep track of full text
        let fullText = toRotate[i];
        // (?) if the current state is deleting then we'll take the full text and get its substring so one letter less than the current number of letters
        // then (:) if it's not deleting, then the opposite, we add one letter to the text to make it closer to the full text 
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        // update the state to updated text
        setText(updatedText);

        // check if deleting to change pace (faster)
        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2);
        }

        // check if we finish typing out the word
        // if we're not deleting and text is fully updated, we need to change deleting status to TRUE
        // also set Delta to normal pace
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        // if it is deleting and get to the point where text is fully deleted (empty)
        // then change status to FALSE and change LOOP NUM to next
        // change delta pace
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    {/**ALL XS, MD, XL add up to 12 if you plan to add more col */}
                    <Col xs={12} md={6} xl={7}>
                        {/** this is to track/use animation and div is for styling */}
                        {/** if it is visible fade in, IF NOT leave as is */}
                        {/** "animate__animated animate__[insert animation] is used to add animation" AND HAVE TO WRAP WHAT WE WANT*/}
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                {/**this is title */}
                                <span className="tagline">
                                    Welcome to my Portfolio
                                </span>
                                {/** first put text, then animation*/}
                                <h1>
                                    {` Hi I'm Adrian Flores `}
                                    <span className="wrap" /**this text WILL BE rotating */>
                                        {text}
                                    </span>
                                </h1>
                                <p>
                                    THIS IS A SAMPLE PARAGRAPH, ADD DESCRIPTION IN THE FUTURE
                                </p>

                                {/**THIS BUTTON WILL BE USING BOOTSTRAP ICONS */}
                                <button onClick={() => console.log('connect')}>
                                    Let's connect <ArrowRightCircle size={25} />
                                </button>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    
                    {/** THIS WILL BE FOR THE IMAGE WE ADD ON MAIN PG */}
                    <Col xs={12} md={6} xl={5}>
                        <img src={astroImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}