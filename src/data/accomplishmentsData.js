// THIS IS WHERE WE WILL STORE THE DATA FOR EACH ACCOMPLISHMENT 

// import images for accomplishment tabs
import deansList_2022 from "../assets/img/2022_Deans_List.png";
import deanList_2024 from "../assets/img/2024_Spring_Deans_List.png";
import sampleImage from "../assets/img/2022_Deans_List.png";
import bachelorDegree from "../assets/img/Bachelors_Degree.png";
import coopFellowDegree from "../assets/img/Fellowship_Completion.png";
import codePathCertificate from "../assets/img/CodePath_TIP102_Certificate.png";
import googleAnalyticsCertificate from "../assets/img/Google_DataAnalytics_Certificate.png";

// this is for the dean's list section
// ID is for being able select the correct item in state
export const deansListItems = [
    {
        id: "deans-2022",
        title: "Dean's List - Academic Year 2022",
        description: "Recognized for sustained academic excellence in Computer Science coursework at CSULA!",
        imgURL: deansList_2022,
        details: [
            "Recognized for sustained academic excellence across the academic year in the Computer Science program at CSULA.",
            "Completed technically rigorous coursework emphasizing software development, data structures, and analytical problem-solving.",
            "Demonstrated consistent academic performance across multiple semesters in a STEM-focused curriculum.",
        ],
    },
    {
        id: "deans-spring-2024",
        title: "Dean's List - Spring 2024",
        description: "Awarded for outstanding academic performance in the Computer Science Program at CSULA!",
        imgURL: deanList_2024,
        details: [
            "Awarded Dean's List honors for outstanding academic performance during the Spring 2024 semester in Computer Science at CSULA.",
            "Excelled in technically rigorous, upper-division corusework focused on software engineering and data-driven systems.",
            "Demonstrated strong analytical and problem-solving skills through coursework and projects.",
        ],
    },
    {
        id: "deans-2025",
        title: "(CHANGE PICTURE) Dean's List - Academic Year 2025",
        description: "Earned Dean's List honors for consistent academic achievement in Computer Science at CSULA!",
        imgURL: sampleImage,
        details: [
            "Earned Dean's List recognition for consistent academic achievement throughout the 2025 academic year in Computer Science.",
            "Maintained high academic performance while completing advanced, upper-division technical coursework",
            "Demonstrated academic discipline and technical growth across a full academic year",
        ],
    }
];

// this array is for ALL DEGREES 
export const educationItems = [
    {
        id: "bs-csula-cs",
        title: "B.S. in Computer Science - CSULA",
        description: "Bachelor of Science in Computer Science with a focus on software development, data systems, and analytical problem-solving.",
        imgURL: bachelorDegree,
        details: [
            "EXAMPLE bullet point EXAMPLE bullet point EXAMPLE bullet point EXAMPLE bullet point",
            "EXAMPLE bullet point EXAMPLE bullet point",
        ],
    },
    {
        id: "coop-certificate",
        title: "COOP Data Analytics Fellowship - Certificate",
        description: "Completed an intensive data analytics fellowship covering SQL, Tableau, data visualization, and applied business analytics.",
        imgURL: coopFellowDegree,
        details: [
            "EXAMPLE bullet point EXAMPLE bullet point EXAMPLE bullet point EXAMPLE bullet point",
            "EXAMPLE bullet point EXAMPLE bullet point",
        ],
    },
];

export const courseItems = [
    {
        id: "codePath-certificate",
        title: "CodePath - IntermediateTechnical Interview Prep (TIP 102)",
        description: "Completed an intensive interview preparation course focused on data structures, algorithms, and problem-solving patterns in Java and Python.",
        imgURL: codePathCertificate,
        details: [
            "Solved LeetCode-style algorithmic problems using Java and Python in time and collaborative settings.",
            "Practiced core data structures and algorithms including arrays, hash maps (dictionaries), linked lists, stacks, queues, trees, and graphs.",
            "Applied recursion, divide-and-conquer strategies, and Binary Tree/Graph traversal techniques.",
            "Analyzed solutions using Big-O time and space complexity to evaluate performance tradeoffs.",
            "Completed structured weekly problem sets by tackling multiple Easy-Hard level coding challenges within time limits, with mentor guided mock interviews and feedback."
        ],
    },
    {
        id: "coursera-dataAnalytics-cert",
        title: "Google Data Analytics Certificate - Coursera",
        description: "Earned Google's Data Analytics Professional Certificate, focused on SQL, Tableau, data, visualization, and applied analytics.",
        imgURL: googleAnalyticsCertificate,
        details: [
            "Worked with SQL, spreadsheets (Excel), and R to clean, analyze, and transform datasets as part of guided coursework.",
            "Built Tableau dashboards and visualizations to communicate insights from structured case studies",
            "Applied data cleaning techniques including data validation, formatting, and filtering",
            "Completed hand-on lessons covering the end-to-end data analysis process, from data preparation to visualization,", 
            "Developed a foundation in analytics workflows that later supported applied work in a professional fellowship setting.",
        ],
    },
];
