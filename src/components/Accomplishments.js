import { Container, Tab, Col, Row, Nav } from "react-bootstrap";

import { ProjectCard } from "./ProjectCard";
// images for dean's list
import sampleImage from "../assets/img/2022_Deans_List.png";
import deansList_2022 from "../assets/img/2022_Deans_List.png";
import deanList_2024 from "../assets/img/2024_Spring_Deans_List.png";
// images for education
import bachelorDegree from "../assets/img/Bachelors_Degree.png";
import coopFellowDegree from "../assets/img/Fellowship_Completion.png";
// images for courses
import codePathCertificate from "../assets/img/CodePath_TIP102_Certificate.png";
import googleAnalyticsCertificate from "../assets/img/Google_DataAnalytics_Certificate.png";

import colorSharp2 from "../assets/img/color-sharp2.png";

export const Accomplishments = () => {
    // create array for the accomplishments, start with degree
    const Accomplishments = [
        {
            title: "Dean's List - Academic Year 2022",
            description: "Recognized for sustained academic excellence in Computer Science coursework at CSULA!",
            imgURL: deansList_2022,
        },
        {
            title: "Dean's List - Spring 2024",
            description: "Awarded for outstanding academic performance in the Computer Science Program at CSULA!",
            imgURL: deanList_2024,
        },
        {
            title: " (CHANGE PICTURE) Dean's List - Academic Year 2025",
            description: "Earned Dean's List honors for consistent academic achievement in Computer Science at CSULA!",
            imgURL: sampleImage,
        }
    ];
    
    // create array for bachelor's and fellowship
    const Educations = [
        {
            title: "B.S. in Computer Science - CSULA",
            // description: "Earched a Bachelor of Science in Computer Science with a strong focus on software development, data systems, and analytical problem-solving",
            description: "Bachelor of Sience in Computer Science with a focus on software development, data systems, and analytical problem-sovling.",
            imgURL: bachelorDegree,
        },
        {
            title: "COOP Data Analytics Fellowship - Certificate",
            // description: "Selected for and completed an intensive data analytics fellowship covering SQL, Tableau, data visualization, and applied business analytics in a collaborative cohort environemtn.",
            description: "Completed an intensive data analytics fellowship covering SQL, Tableau, data visualization, and applied business analytics.",
            imgURL: coopFellowDegree,
        }
    ]

    // create array for course that have been completed
    const Courses = [
        {
            title: "CodePath - Intermediate Technical Interview Prep (TIP102)",
            description: "Completed an intensive interview preparation course focused on data structures, algorithms, and problem-solving patterns in Java and Python",
            imgURL: codePathCertificate,
        },
        {
            title: "Google Data Analytics Certificate - Coursera",
            description: "Earned Google's Data Analytics Professional Certificate, focused on SQL, Tablleau, data, visualization, and applied analytics.",
            imgURL: googleAnalyticsCertificate,
        }
    ]
    
    return(
        <section className="accomplishment" id="accomplishments">
            <Container>
                <Row>
                    <Col>
                        <h2>
                            Accomplishments
                        </h2>
                        <p>
                            Checkout these accomplishment of mine!!!
                        </p>
                        <Tab.Container id="accomplishments-tabs" defaultActiveKey="firstAcc">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="firstAcc"> Education </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="secondAcc"> Courses </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="thirdAcc"> Dean's List </Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventKey="firstAcc">
                                    <Row>
                                        {
                                            Educations.map((education, index) =>{
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...education}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="secondAcc">
                                    <Row>
                                        {
                                            Courses.map((course, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...course}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="thirdAcc">
                                    <Row>
                                        {
                                            Accomplishments.map((accomplishment, index) =>{
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...accomplishment}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
}