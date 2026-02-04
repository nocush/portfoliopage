import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import { Col, Row } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import linkedInLogo from './../assets/banner.webp';
import swiftUILogo from './../assets/swiftuilogo.png';
import reactLogo from './../assets/reactlogo.webp';
import TSLogo from './../assets/tslogo.png';
import dockerLogo from './../assets/dockerlogo.webp'
import sqlLogo from './../assets/sqllogo.png';
import javaLogo from './../assets/javalogo.webp';
import csLogo from './../assets/cslogo.png';
import mongoLogo from './../assets/mongologo.png';
import './../styles/Skills.css';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }


    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>Here are some of the technologies I work with:</p>
                        <Carousel className='skill-slider' responsive={responsive} infinite={true}>
                            <div className="item">
                                <img src={reactLogo} alt="Skill Logo" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={csLogo} alt="Skill Logo" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={swiftUILogo} alt="Skill Logo" />
                                <h5>Swift/SwiftUI</h5>
                            </div>
                            <div className="item">
                                <img src={TSLogo} alt="Skill Logo" />
                                <h5>TS/JS</h5>
                            </div>
                            <div className="item">
                                <img src={dockerLogo} alt="Skill Logo" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={javaLogo} alt="Skill Logo" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={sqlLogo} alt="Skill Logo" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={mongoLogo} alt="Skill Logo" />
                                <h5>NoSQL</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills;