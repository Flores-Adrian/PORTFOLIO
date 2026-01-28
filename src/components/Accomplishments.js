import { Modal, Container, Tab, Col, Row, Nav, Button } from "react-bootstrap";
import { useState } from "react";

import { ProjectCard } from "./ProjectCard";
import { deansListItems, educationItems, courseItems } from "../data/accomplishmentsData";

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

    // initiate Modal
    // contorls if modal is visible or not
    const [openModal, setOpenModal] = useState(false);
    // this will contain the title, description, imgURL, etc. that was clicked
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClose = () => {
        setOpenModal(false);
        setSelectedItem(null);
    }

    const handleOpen = (item) => {
        setOpenModal(true);
        setSelectedItem(item);
    }

    
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
                                            educationItems.map((education) => (
                                                <ProjectCard
                                                    key={education.id}
                                                    {...education}
                                                    onClick={() => handleOpen(education)}
                                                />
                                                )
                                            )
                                        }
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="secondAcc">
                                    <Row>
                                        {
                                            courseItems.map((course) => (
                                                
                                                <ProjectCard
                                                    key={course.id}
                                                    {...course}
                                                    onClick = {() => handleOpen(course)}
                                                />  
                                                )
                                            )
                                        }
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="thirdAcc">
                                    <Row>
                                        {
                                            deansListItems.map((deansList) =>(
                                                <ProjectCard
                                                    key={deansList.id}
                                                    {...deansList}
                                                    onClick = {() => handleOpen(deansList)}
                                                    />
                                                
                                            ))
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                        {/**  this is on shared modal (maybe change?) */}
                        <Modal show={openModal} onHide={handleClose} centered size="lg">
                            
                            <Modal.Header closeButton className="accomplishment-modal-card">
                                <Modal.Title className="accomplishment-modal-title" >
                                    {selectedItem?.title ?? ""}
                                </Modal.Title>
                            </Modal.Header>

                            <Modal.Body className="accomplishment-modal-card">
                                {/** Show image IF THE selected item has a imgURL */}
                                {selectedItem?.imgURL && (
                                    <img
                                        className="accomplishment-modal-img"
                                        src={selectedItem.imgURL}
                                        alt={selectedItem.title}
                                    />
                                )}
                                <p className="accomplishment-model-description">
                                    {selectedItem?.description}
                                </p>

                                {/** Show details IF THE selected item has any extra details */}
                                {selectedItem?.details?.length > 0 && (
                                    <ul className="accomplishment-modal-details">
                                        {selectedItem.details.map((detail, index) => (
                                            <li key={index}>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose} className="modal-close-btn" >
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </Col>
                </Row>
            </Container>
            
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
}