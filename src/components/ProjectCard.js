// this will be for the content that is inside each project
// we can fix this later, takes in 3 arguments
import { Col } from "react-bootstrap";

// the COL is used to place the content inside "small" is for 2 cards per row
// "md" is for 3 contents per row
export const ProjectCard = ({title, description, imgUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}