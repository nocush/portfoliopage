import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import '../styles/Projects.css';
import ProjectCard from './ProjectCard';
import colorswap from './../assets/colorswap.gif';
import website from './../assets/website.png';
import icecreamstore from './../assets/icecreamstore.gif';
import engineer from './../assets/engineer.png';
import 'animate.css';
import TrackVisibility from "react-on-screen";
const Projects = () => {
    const projects = [
        {
            title: "Color Swap",
            description: "Mobile game written in Swift, where the goal is to get through obstacles by using the part of the obstacle that matches the color of the player.",
            imgUrl: colorswap
        },
        {
            title: "Portfolio Website",
            description: "This portfolio website is built using React and TypeScript",
            imgUrl: website
        },
        {
            title: "Ice Cream Store",
            description: "Mobile app written in SwiftUI, made for ordering ice cream from a local store.",
            imgUrl: icecreamstore
        },
        {
            title: "Food Review App (project for my engineer degree)",
            description: "A multi-platform application that allows users to review and rate food from various restaurants. It includes features like user authentication, restaurant search, and review submission. I was responsible for the backend development.",
            imgUrl: engineer
        }
    ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({isVisible}) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <h2>Projects</h2>
                                <p>Here are some of the projects I have worked on:</p>
                            </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="project-1">Color Swap</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="project-2">Portfolio Website</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="project-3">Ice Cream Store</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="project-4">Food Review App</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            {
                                projects.map((project, index) => (
                                    <Tab.Pane eventKey={`project-${index + 1}`} key={index} className="project-pane-center">
                                        <Row className="justify-content-center">
                                            <Col md={12} lg={8}>    
                                            <ProjectCard 
                                                title={project.title} 
                                                description={project.description} 
                                                imgUrl={project.imgUrl} 
                                            />
                                        </Col>
                                        </Row>
                                    </Tab.Pane>
                                ))
                            }
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Projects;