import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiGit,
} from "react-icons/di";
import {
  SiLaravel,
  SiMysql,
  SiCodeigniter,
  SiCss3,
  SiHtml5,
  SiPhp,
  SiBootstrap,
  SiTailwindcss,
  SiReact
} from "react-icons/si";

const techstack = [
  {
    icon: <SiHtml5 />,
  },
  {
    icon: <SiCss3 />,
  },
  {
    icon: <SiPhp />,
  },
  {
    icon: <DiJavascript1 />,
  },
  {
    icon: <SiCodeigniter />,
  },
  {
    icon: <SiLaravel />,
  },
  {
    icon: <SiMysql />,
  },
  {
    icon: <SiBootstrap />,
  },
  {
    icon: <SiTailwindcss />,
  },
  {
    icon: <SiReact />,
  },
  {
    icon: <DiGit />,
  },
];

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techstack.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {tech.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;