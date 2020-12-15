import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import './contact-form.style.css'


const Contactform = () => {
    return (
        <div id='contact'>
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:shaiknawaz05@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="shaiknawaz05@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email 
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://github.com/shaiknawaz05" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.instagram.com/iamnawz/?hl=en" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Follow me on insta">
                  <i className="fab fa-instagram-square"></i> Instagram
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
        </div>
    )
}

export default Contactform
