import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import our project cards
import { ProjectCard } from "./ProjectCard";
// import images for projects 
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

// import gradient background
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import 'animate.css';


//
export const Projects = () => {

    // array will hold information for projects
    // [TITLE, DESCRIPTION, IMAGE URL]
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgURL: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgURL: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgURL: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgURL: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgURL: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgURL: projImg3,
        },
    ];


    // this is for project titles and description
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__bounce": ""}>
                    <h2> Projects </h2>
                    <p /*Use bootsSrap TAB to not only have tabs but project cards*/> sample description, CHANGE THIS DESCRIPTION TO SUMAMRIZE</p>
                    </div>}
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first"> Tab One </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second"> Tab Two </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third"> Tab Three </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content /**This is where place the info for each individual project card */>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        // when mapping things, we can use ..project
                                        // to pass all the props for the project
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second"> Place whatever info IN THESE </Tab.Pane>
                            <Tab.Pane eventKey="third"> PLACE WHATEVER INFO IN THESE TABS </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} /** THIS IS BACKGROUND */ ></img>
        </section>
    );
}