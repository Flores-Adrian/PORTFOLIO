import { Container, Col, Row } from "react-bootstrap";
// we are using REACT-MULTI-CAROUSEL so we have to import/download it
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
//import images for skills
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
// image for corner of skills section
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    // this is the default format for multi-carousel
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depens on what the CONTEXT IS
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    // this is to build the components, NEW SECTION
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx" /** this is to store all skills */>
                            <h2>
                                Skills
                            </h2>
                            <p /**Carousel is infinite is so it can go around and come back */> THIS IS SOME SAMPLE DESCRIPTION/SKILLS TO ADD </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item" /** THIS IS THE IMAGE FOR THE SPECIFIC SKILL*/>
                                    <img src={meter1} alt="Image" />
                                    <h5>Web Devlopment</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image"/>
                                    <h5>Brand Identity</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image"/>
                                    <h5>Logo Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image"/>
                                    <h5>Web Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}