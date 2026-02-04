import { Container, Row, Col } from "react-bootstrap";
import { aboutMeItems } from "../data/aboutMeData";
import colorSharp from "../assets/img/color-sharp.png";
import { motion } from "framer-motion";

export const AboutMe = () => {
    
    // parent container to make each paragraph animate one after another
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    // animation for each paragraph: fade in then slide up a bit
    const paragraphVariants = {
        hidden: {opacity: 0, y:14 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: "easeOut" },
        },
    };

    return (
        <section className="aboutMe" id="aboutMe">
            <Container>
                <motion.h2
                 className="aboutMe-title"
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, ease: "easeOut" }}
                 viewport={{ once: true, amount: 0.4 }}
                 >
                    About Me
                </motion.h2>
                
                <Row className="align-items-center">
                    
                    {/** LEFT SIDE */}
                    <Col md={6}>
                        {/** .map() to loop through each paragraph in array and keep use unique index key/index */}
                        <motion.div
                         className="aboutMe-summary"
                         variants={containerVariants}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true, amount: 0.35 }}
                         >
                            {aboutMeItems.description.map((paragraph, index) =>(
                                <motion.p key={index} variants={paragraphVariants}>{paragraph}</motion.p>
                            ))}
                        </motion.div>
                    </Col>

                    {/** RIGHT SIDE */}
                    <Col md={6} className="aboutMe-Pictures">
                        <img 
                        src={aboutMeItems.imgURL}
                        alt="ImageOfMe"
                        className="aboutMe-selfie"
                        />
                    </Col>
                </Row>
            </Container>


            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    );
}