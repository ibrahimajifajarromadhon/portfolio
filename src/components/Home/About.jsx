import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa";

const socialMedia = [
  {
    id: 1,
    href: "https://github.com/ibrahimajifajarromadhon",
    ariaLabel: "github",
    icon: <AiFillGithub />,
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/ibrahim-aji-fajar-r/",
    ariaLabel: "linkedin",
    icon: <FaLinkedinIn />,
  },
  {
    id: 3,
    href: "https://www.facebook.com/share/15Get7UPKU/",
    ariaLabel: "facebook",
    icon: <FaFacebook />,
  },
  {
    id: 4,
    href: "https://www.instagram.com/ibrahimaji.fajar/",
    ariaLabel: "instagram",
    icon: <FaInstagram />,
  },
];

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
              LET ME <span className="green"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello, my name is{" "}
              <b className="green">Ibrahim Aji Fajar Romadhon </b>
              and I am from <b className="green"> Jawa Tengah, Indonesia.</b>
              <br />
              <br />I am an active student majoring in
              <b className="green"> Information Systems</b> at
              <b className="green"> Amikom University, Yogyakarta.</b>
              <br />
              <br />I am proficient in
              <b className="green"> PHP, </b>
              as well as have knowledge in programming languages such as
              <b className="green"> Javascript.</b>
              <br />
              <br />I have a passion for working with{" "}
              <b className="green">PHP, MySQL,</b> and
              <i>
                <b className="green"> PHP libraries and frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="green"> Codeigniter </b>,
                <b className="green"> Laravel </b>
                &
                <b className="green"> React Js</b>
              </i>
              <br />
              <br />I am also interested in building new
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
              Please dont hesitate to reach out to me and{" "}
              <span className="green">connect.</span>
            </p>
            <ul className="home-about-social-links">
              {socialMedia.map((socialMedia, index) => (
                <li className="social-icons" key={index}>
                  <a
                    href={socialMedia.href}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label={socialMedia.ariaLabel}
                  >
                    {socialMedia.icon}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
