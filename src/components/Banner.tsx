import { Col, Container, Nav, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import {useState, useEffect} from "react";
import bannerImg from './../assets/banner2.png';
import './../styles/Banner.css';
import 'animate.css';
import TrackVisibility from "react-on-screen";

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", 'Mobile App Developer', 'Software Engineer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    const description = "Computer Science Engineer with specialization in software engineering. Soon to have master's degree in Applied Computer Science in Game Development specialization."

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"Hi, I'm Mateusz "}<br /><span className="wrap">{"<" + text + ">"}</span></h1>
                        <p>{description}</p>
                        <Nav.Link href="#contact"><button onClick={() => console.log('Button clicked!')}>Contact <ArrowRightCircle size={25} /></button></Nav.Link>
                    </div>}
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={bannerImg} alt="Banner Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;
