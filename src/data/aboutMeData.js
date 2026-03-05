import pictureOfMe from "../assets/img/pictureOfMe.jpg";
import cumLaudePicture from "../assets/img/secondPictureOfMe.jpeg";
import jpl_research_pic from "../assets/img/jpl_research_pic.jpeg";
import arduino_Project from "../assets/img/arduino_happybday_proj.jpeg";
import arduino_Second_Project from "../assets/img/arduino_simon_says_picture.jpeg";
import arduino_Second_Project_Video from "../assets/img/jpl_research_pic.jpeg";


// this is for the ABOUT ME SECTION AND THE LONG PARAGRAPHS
export const aboutMeItems = {
    id: "about-me-section",
    description: [
        "I'm Adrian Flores, a Computer Science graduate from California State University, Los Angeles, with a strong interest in software development, data systems, and applied analytics. As a first-generation Mexican American student from an immigrant family, my path into tech has been shaped by curiosity, persistence, and desire to build meaningful, real-world solutions.",
        
        "I enjoy bulding systems that turn complex problems into practical, scalable solutions, whether through code, data analysis, or visualization. I'm especially motivated by work that sits at the intersection of technology, real-world impact, and continuous learning.",

        "Outside the school, I've been involved in technical and community-focused experiences, including servbing as a Project Officer in CSULA's ACM chapter, mentoring peers, and completing the COOP Data Analytics Fellowship while strengthening both my technical foundation and collaborative skills.",

        "I'm currently seeking software engineering or technically focused roles where I can continue growing while contributing to teams that value curiousity, mentorship, and impact.",
    ],
    media: [
        { type: "image", src: pictureOfMe, alt: " Portrait " },
        { type: "image", src: cumLaudePicture, alt: " Cum Laude " },
        { type: "image", src: jpl_research_pic, alt: " JPL research " },
    ],
    
    //images: [pictureOfMe, cumLaudePicture, jpl_research_pic],
};

// this is for THE WORK EXPERIENCE SECTION
export const workExperienceItems = {
    id: "work-experience-section",
    title: "Robotics & Arduino Instructor",
    meta: "Whizara | August 2025 - Present",
    description: [
        "Designed and delivered a custom Arduino curriculum for high school students (ages 15-18), teaching core embedded systems concepts using C++ and Arduino IDE/Cloud",
        "Guided 5-10 students per cohort through hands-on hardware projects including sensors, LEDs, motors, and input/output systems",
        "Translated complex technical concepts into interactive lessons using slides, live demonstrations, and real-time code walkthroughs",
        "Mentored students thorugh problem-solving sessions, reinforcing algorithmic thinking and hardware-software integration",
    ],
    // medio objects: image AND youtube video
    media: [
        { type: "image", src: arduino_Project, alt: "Arduino Project 1" },
        { type: "image", src: arduino_Second_Project, alt: "Arduino Project 2"},
        {
            type: "youtube",
            src: "https://www.youtube.com/embed/i9VjTIryn6s?si=vk-NHqJ1bckCfO-I",
            title:"YouTube video player",
        },
    ],
   // images: [arduino_Project, arduino_Second_Project, arduino_Second_Project_Video],
};