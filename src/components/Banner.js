/*
setInterval : callBack method that calls provided function at specific intervals
uses: 
Animation (updating display at regular intervals creating motion)
Polling (checking updates/new data from a server at specified intervals)
Periodic Tasks (preforming tasks needed to be executed periodically ex: refreshing content)

useEffect: React hook that preforms/handles side effects 
ex: 
setting/cleaning up rescources
fetching data
updating the DOM
managing subscriptioons

*/ 


import { useState, useEffect } from "react"; 
import { Container, Row, Col } from "react-bootstrap"; 
import headerImg from "../assets/imgs/bannerImg.avif";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0); 
    const [isDeleting, setIsDeleting] = useState(false); 
    const toRotate = [ "Web Dev. & Design", "E-Commerce", "Digital Marketing", "SEO", "Social Media Management", "UI/UX Designer" ]; 
    const [text, setText] = useState(''); 
    const [pace, setPace] = useState(300 - Math.random() * 100);  
    const pause = 2000; 

    useEffect(() => { 
        let ticker = setInterval(() => { 
            tick(); 
            }, pace) // (setInterval value) 
    
            return () => { clearInterval(ticker)};  // clean code and avoid memory leak
     
    }, [text]) // (useEffect value) when this changes the effect is re-run

    const tick = () => {
        let i = loopNum % toRotate.length; 
        let fullText = toRotate[i];
        let updatedText = isDeleting ? 
        fullText.substring(0, text.length - 1) : 
        fullText.substring(0, text.length + 1) 

        setText(updatedText); 
        if (isDeleting) { 
            setPace(prevpace => prevpace / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true); 
            setPace(pause); 
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false); 
            setLoopNum(loopNum + 1); 
            setPace(500); 
        }
    }

    return (
        <section className='banner' id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hello I am Jones`}</h1>
                    <h2 className="wrap">| {text}</h2>
                    <p>Boost your brand's impact with a versatile freelance web developer and designer. Also proficient in essential tech skills for digital marketing such as SEO and social media management. Achieve a compelling online presence that captivates your audience. </p>
                   <button>Let's connect<a href="#get-in-touch"><ArrowRightCircle size={25}/></a></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}