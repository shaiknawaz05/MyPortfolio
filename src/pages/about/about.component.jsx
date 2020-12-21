import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './about.style.css'
import Profile from '../../assets/img/profile/profile.jpeg'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const About = () => {
    return (
        <div id="about">
            <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
            <Container>
           <Row className="pt-3 pb-5 align-items-center">
               <Col xs={12} md={6}>
                  <Row className="justify-content-center mb-2 mr-2">
                   <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid/>
                  </Row>
              </Col>
              <Col xs={12} md={6}>
               <Row className=" align-items-start p-2 my-details rounded">
               Hiii.. I am  <strong>&nbsp;Shaik Nawaz</strong>
                <br />A passionate Learner, born and brought up in India. 
                <br />I am a Full Stack Web Developer with React.js,Django,Bootstrap,SQL as my tech stack.
                <br />
                <br />
                 I am pursuing my Engineering  in 'Computer Science Engineering'. Batch of 2017 at JNTU Pulivendula.
                 <br />I am good at C,Java and Python.
                 <br />
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better products.
                <br /> <br />
               </Row>
               <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-secondary"> Let's talk</Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1m6rxpSFpMLuKkEool70N7ojpJcI5FiUU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/shaiknawaz05" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  
                </Col>
               </Row>
              </Col>
           </Row>
            </Container>
        </div>
        </div>
    )
}

export default About;
