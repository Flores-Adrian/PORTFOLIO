// this will be for the content that is inside each project
// we can fix this later, takes in 3 arguments
import { Col } from "react-bootstrap";

// the COL is used to place the content inside "small" is for 2 cards per row
// "md" is for 3 contents per row
// ADDED: onClick to be able to create Modal for each individual card
// UPDATED: <div> now has a onCLick and acts like a button to be able to click
export const ProjectCard = ({title, description, imgURL, onClick }) => {
    return (
        <Col sm={6} md={4}>
            <div 
                className="proj-imgbx"
                role="button"
                tabIndex={0}
                onClick={onClick}
                onKeyDown={(e) => (e.key === "Enter" ? onClick?.() : null)}
            >
                <img src={imgURL} alt={title}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}