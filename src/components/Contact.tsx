import { Col, Container, Row } from "react-bootstrap";
import './../styles/Contact.css';
import githubicon from './../assets/github-icon.png';
import linkedinicon from './../assets/linkedin-icon.png';
import mailicon from './../assets/mail-icon.png';
import phoneicon from './../assets/phone-icon.png';
import contactus from './../assets/contact-us.png';


const Contact = () => {

    return(
        <section className="contact" id="contact">
            <Container>
                <h2>Contact Me</h2>
                <p>If you have any questions or would like to get in touch, feel free to reach out!</p>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5} className="contact-image-col">
                        <img src={contactus} alt="Contact Us" className="contact-image" />
                    </Col>
                    <Col xs={12} md={6} xl={7} className="contact-info">
                            <p><img src={mailicon} alt="Email" /><a href="mailto:mateusz.bartoszek1@gmail.com">mateusz.bartoszek1@gmail.com</a></p>
                            <p><img src={phoneicon} alt="Phone" /><a href="tel:+48786896386">+48 786 896 386</a></p>
                            <p><img src={linkedinicon} alt="LinkedIn" /><a href="https://www.linkedin.com/in/mbartoszek/" target="_blank" rel="noopener noreferrer">Click Here</a></p>
                            <p><img src={githubicon} alt="GitHub" /><a href="https://github.com/nocush" target="_blank" rel="noopener noreferrer">Click Here</a></p>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    )
}

export default Contact;