import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={12} className="home-about-description">
                <h1 style={{ fontSize: "2.6em", textAlign:"center" }}>
                  LET ME <span className="green"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hello, my name is <b className="green">Ibrahim Aji Fajar Romadhon </b>
                 and I am from <b className="green"> Jawa Tengah, Indonesia.</b>
                <br />
                <br />
                I am an active student majoring in 
                <b className="green"> Information Systems</b> at 
                <b className="green"> Amikom University, Yogyakarta.</b>
                <br />
                <br />
                  I am proficient in
                    <b className="green"> PHP, </b>
                    as well as have knowledge in programming languages such as 
                  <b className="green"> Javascript, C++.</b>
                  <br />
                  <br />
                  I have a passion for working
                  with <b className="green">PHP, MySQL,</b> and
                  <i>
                    <b className="green">
                      {" "}
                      PHP libraries and frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="green"> Codeigniter </b>
                    &
                    <b className="green"> Laravel</b>
                  </i>
                  <br />
                  <br />
                  I am also interested in building new
                  <i>
                    <b className="green"> Web Technologies. </b>
                  </i>
                  <br />
                  
                </p>
              </Col>
              
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please dont hesitate to reach out to me and <span className="green">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/ibrahimajifajarromadhon"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/ibrahim-aji-fajar-r/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About