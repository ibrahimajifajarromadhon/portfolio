import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/homeLogo.png'
import About from '../components/Home/About';
import Type from '../components/Home/Type';

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
          <Col md={5} style={{ paddingBottom: 0 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Ibrahim Aji Fajar Romadhon</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", paddingTop: 30 }}>
                <Type />
              </div>
            </Col>

          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home