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


import { useState, useEffect } from "react"; // for animation
import { Container, Row, Col } from "react-bootstrap"; 
import headerImg from "../assets/imgs/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0); // keeps track of which WORD is currently being proccessed in the animation via its index 
    const [isDeleting, setIsDeleting] = useState(false); // is word being deleted or not 
    const toRotate = [ "Web Dev. & Design", "E-commerce", "Digital Marketing", ]; // words to be rotate in the animation 
    const [text, setText] = useState(''); // continue-ally updated with each letter character as the animation types/deletes
    const [pace, setPace] = useState(300 - Math.random() * 100);  // the pace of typing (calculated randomly initially) by milliseconds
    const pause = 2000; // how much time it take for one string value to be typed out and deleted (full animation cycle)


    useEffect(() => { // function to create animation 
        let ticker = setInterval(() => { 
            tick(); // when tick is being fire off  
            }, pace) // (setInterval value) time inbetween each Interval value
    
            return () => { clearInterval(ticker)};  // clean code and avoid memory leak
     
    }, [text]) // (useEffect value) when this changes the effect is re-run

    const tick = () => {
        let i = loopNum % toRotate.length; // i = index. index of current word and increments (to next word) only within the bounds of the array  
        let fullText = toRotate[i]; // to keep track of fullText 
        let updatedText = isDeleting ? // updateText is the core of the deleting/typing animation
        fullText.substring(0, text.length - 1) : // if deleting then -
        fullText.substring(0, text.length + 1) // if not deleting then +

        setText(updatedText); // update state of text

        if (isDeleting) { // if deleting then pace (pace) is faster 
            setPace(prevpace => prevpace / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true); 
            setPace(pause); // introduces 2000 ms pause b4 next stage
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false); 
            setLoopNum(loopNum + 1); // last step in the process in order to move on to next words index
            setPace(500); // introduces 500 ms pause b4 next stage
        }
    }

    return (
        <section className='banner' id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{'Hello I am jones'}</h1>
                    <h2 className="wrap">{text}</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button>Let's connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}