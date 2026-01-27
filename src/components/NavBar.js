import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import LinkedIn from '../assets/img/nav-icon1.svg';
import GitHub from '../assets/img/github-icon.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    
    // this is to check that the user is scrolling through the page to change effect
    // of navbar

    // THESE ARE FUNCTIONS
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        // this is so that it activates when it scrolles
        window.addEventListener("scroll", onScroll);

        // remove when component gets removed from the dome
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    // add function for active link effect
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    // this function is to guide user to contact form
    const scrollToConnect = () => {
        const section = document.getElementById("connect");
        if (section) {
            section.scrollIntoView({ behavior : 'smooth'});
        }
    };

    return (
        // add condition to see if it's scrolled, if not leave as is for the navbar
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
                
                <Navbar.Brand href="#home" /*this is for home logo*/> 
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/** this is for navabar trigger */>
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                
                <Navbar.Collapse id="basic-navbar-nav"/**this is to add the links to our sections so that is able to get clicked on */>
                    <Nav className="me-auto" /**the className is so that the link highlights if on/click it */>
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#accomplishments" className={activeLink === 'accomplishments' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('accomplishments')}> Accomplishments</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/floresadrian"><img src={LinkedIn} alt="" /></a>
                            <a href="https://github.com/Flores-Adrian"><img src={GitHub} alt="" /></a>
                            <a href="#"><img src={navIcon3} alt="" /></a>
                        </div>
                        <button className="vvd" onClick={scrollToConnect}>
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>        
        </Navbar>
    )
}