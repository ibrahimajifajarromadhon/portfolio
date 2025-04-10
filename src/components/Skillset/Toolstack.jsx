import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiNetlify,
  SiXampp,
  SiLaragon
} from "react-icons/si";

const tools = [
  {
    icon: <SiVisualstudiocode />,
  },
  {
    icon: <SiVercel />,
  },
  {
    icon: <SiNetlify />,
  },
  {
    icon: <SiXampp />,
  },
  {
    icon: <SiLaragon />,
  },
];

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;