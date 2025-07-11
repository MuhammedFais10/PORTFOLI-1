import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from "../asset/img/header-img.svg"

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
 // const [index, setIndex] = useState(1); // <-- new
  const toRotate = ["Web Developer", "Web Disigner"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)
    return () => { clearInterval(ticker) }
  }, [text,delta])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting 
    ? fullText.substring(0, text.length - 1)
     : fullText.substring(0, text.length + 1);
  
    setText(updatedText);
  
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
  
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } 
    else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      // setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }
  

  return (
    <section className='banner' id='home'>

      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>
              Welcome To My Portfolio
            </span>
            <h1>{"Hi I'm Muhammed Fais "} <span className='wrap'>{text}</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet earum neque unde? Odio, perferendis quibusdam eum laudantium culpa beatae quos, nihil eligendi temporibus ipsa, eveniet aliquid ullam quae natus reiciendis.</p>
            <button onClick={() => console.log("Banner Button")}>Let's connect <ArrowRightCircle size={25} /> </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='Header Img' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner