import { Container, Col, Row } from "react-bootstrap";

// we are using REACT-MULTI-CAROUSEL so we have to import/download it
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

//import images for skills
import html_second_logo from "../assets/img/html_second_logo.png";
import pythonLogo from "../assets/img/python_logo.png";
import javaLogo from "../assets/img/java_logo.svg";
import cSharpLogo from "../assets/img/cSharp_logo.png";
import javaScriptLogo from "../assets/img/javaScript_logo.png";
import sql_logo from "../assets/img/sql_logo.png";

import aspNetLogo from "../assets/img/asp-net-core-imgg.png";
import djangoLogo from "../assets/img/DjangoImg.png";
import reactNativeLogo from "../assets/img/reactNativeImg.png";
import gitLogo from "../assets/img/git-image.png";
import dockerLogo from "../assets/img/dockerLogoImg.png";
import springBootLogo from "../assets/img/springBootimg.png";
import nodeJsLogo from "../assets/img/nodeJsImg.png";
import mongoDbLogo from "../assets/img/mongoDbLogo.png";

import tableauLogo from "../assets/img/Tableau-logo.png";
import pandasLogo from "../assets/img/pandasLogo.png";
import matplotlibLogo from "../assets/img/matplotlib-logo.png";
import excelLogo from "../assets/img/Excel-Logo.png";
import googleSheetsLogo from "../assets/img/googleSheets-logo.png";

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
                        {/** BLOCK 1: PROGRAMMING LANGUAGES */}
                        <div className="skill-block">
                            <div className="skill-bx skill-bx--main" /** this is to store all skills */>
                                <h2>
                                    Programming Languages
                                </h2>
                                <p /**Carousel is infinite is so it can go around and come back */>
                                <b> MAYBE ADD DESCRIPTION HERE? </b>
                                </p>
                                <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} className="skill-slider">
                                    <div className="item">
                                        <img src={pythonLogo} alt="Image"/>
                                        <h5>Python</h5>
                                    </div>
                                    <div className="item">
                                        <img src={javaLogo} alt="Image"/>
                                        <h5>Java</h5>
                                    </div>
                                    <div className="item">
                                        <img src={javaScriptLogo} alt="Image"/>
                                        <h5>JavaScript</h5>
                                    </div>
                                    <div className="item" /** THIS IS THE IMAGE FOR THE SPECIFIC SKILL*/>
                                        <img src={html_second_logo} alt="Image" />
                                        <h5>HTML</h5>
                                    </div>
                                    <div className="item">
                                        <img src={cSharpLogo} alt="Image"/>
                                        <h5>C#</h5>
                                    </div>
                                    <div className="item">
                                        <img src={sql_logo} alt="Image"/>
                                        <h5>SQL</h5>
                                    </div>
                                </Carousel>
                            </div>
                        </div>


                        {/** THIS IS BLOCK 2: FRAMEWORKS & TOOLS */}
                        <div className="skill-block">
                            <div className="skill-bx skill-bx--compact">
                                <h2> Frameworks & Tools </h2>
                                <p> THIS IS A TEST PROTOTYPE... </p>

                                <Carousel responsive={responsive} infinite autoPlay={true} autoPlaySpeed={2000} className="skill-slider">
                                    <div className="item">
                                        <img src={aspNetLogo} alt="Image" />
                                        <h5> ASP.NET Core </h5>
                                    </div>
                                    <div className="item">
                                        <img src={reactNativeLogo} alt="Image" />
                                        <h5> React Native </h5>
                                    </div>
                                    <div className="item">
                                        <img src={djangoLogo} alt="Image" />
                                        <h5> Django </h5>
                                    </div>
                                    <div className="item">
                                        <img src={gitLogo} alt="Image" />
                                        <h5> Git </h5>
                                    </div>
                                    <div className="item">
                                        <img src={dockerLogo} alt="Image" />
                                        <h5> Docker </h5>
                                    </div>
                                    <div className="item">
                                        <img src={mongoDbLogo} alt="Image" />
                                        <h5> MongoDB </h5>
                                    </div>
                                    <div className="item">
                                        <img src={springBootLogo} alt="Image" />
                                        <h5> Spring Boot </h5>
                                    </div>
                                    <div className="item">
                                        <img src={nodeJsLogo} alt="Image" />
                                        <h5> Node.js </h5>
                                    </div>
                                </Carousel>
                            </div>
                        </div>

                        {/** THIS IS BLOCK3: DATA AND ANALYTICS TOOLS */}
                        <div className="skill-block">
                            <div className="skill-bx skill-bx--analytics">
                                <h2> Data & Analytics Tools </h2>
                                <p>
                                    <b>THIS IS A TEST PROTOTYPE: add description?</b>
                                </p>
                                <Carousel responsive={responsive} infinite autoPlay={true} autoPlaySpeed={2000} className="skill-slider">
                                    <div className="item">
                                        <img src={tableauLogo} alt="Image" />
                                        <h5> Tableau </h5>
                                    </div>
                                    <div className="item">
                                        <img src={pandasLogo} alt="Image" />
                                        <h5> Pandas </h5>
                                    </div>
                                    <div className="item">
                                        <img src={matplotlibLogo} alt="Image" />
                                        <h5> Matplotlib </h5>
                                    </div>
                                    <div className="item">
                                        <img src={excelLogo} alt="Image" />
                                        <h5> Excel </h5>
                                    </div>
                                    <div className="item">
                                        <img src={googleSheetsLogo} alt="Image" />
                                        <h5> Google Sheets </h5>
                                    </div>
                                    <div className="item">
                                        <img src={sql_logo} alt="Image" />
                                        <h5> SQL </h5>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />

            
        </section>
    )
}