import { Navbar, Container, Nav} from 'react-bootstrap';
import './../styles/NavBar.css';
import githubLogo from './../assets/github-icon.png';
import linkedInLogo from './../assets/linkedin-icon.png';
import { useEffect, useState } from 'react';
const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value: string) =>{
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">Mateusz Bartoszek</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="menu ms-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
                    </Nav>
                        <div className="social-icon">
                            <a href="https://github.com/nocush" target="_blank">
                                <img src={githubLogo} alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/mbartoszek/" target="_blank">
                                <img src={linkedInLogo} alt="LinkedIn" />
                            </a>
                        </div>
                        <Nav.Link href="#contact"><button onClick={() => console.log('dupa')}>Contact</button></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;