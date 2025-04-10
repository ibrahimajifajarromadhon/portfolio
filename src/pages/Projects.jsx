import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import ngetrash from "../assets/projects/ngetrash.jpg";
import peduliBelajar from "../assets/projects/peduli-belajar.png";
import makaryo from "../assets/projects/makaryo.png";

const projects = [
  {
    id: 1,
    imgPath: makaryo,
    isBlog: false,
    title: "Project Makaryo (Online Handyman Ordering Application)",
    description:
      "A prototype and front end for an online handyman service booking application called Makaryo, this name comes from Javanese which means work where the hope of developing this prototype and front end can be used by handymen to be able to sell the services they have, especially in the carpentry sector. We designed this application through various stages, starting from interviewing prospective users, designing product identity, designing designs and prototypes, making front ends and testing.",
    ghLink: "https://github.com/ibrahimajifajarromadhon/makaryo-web",
    demoLink: "https://makaryo-web.vercel.app/",
  },
  {
    id: 2,
    imgPath: peduliBelajar,
    isBlog: false,
    title: "Project Peduli Belajar",
    description:
      "Projects Peduli Belajar is a project that uses the Javascript programming language with the React Js library and collaborates with Back End Java. Care for Learning allows users to see available courses along with their prices, types, ratings, and users can also purchase courses if they are paid, then users can immediately follow the courses they have purchased by following the available videos and tutorials. This project aims to provide online technology courses at affordable prices.",
    ghLink: "https://github.com/ibrahimajifajarromadhon/peduli-belajar",
    demoLink: "https://peduli-belajar.vercel.app/",
  },
  {
    id: 3,
    imgPath: ngetrash,
    isBlog: false,
    title: "Project NgeTrash (Waste Collection Data Collection Website using QR Code Scan)",
    description:
      "The Waste Collection Data Collection Website uses QR Code Scanning with the waterfall method, which consists of the stages of requirements, design, development, testing, and maintenance. This system allows officers to record waste collection by scanning the QR Code at each house, and allows residents to access information related to waste collection status, mandatory fees, collection schedules, and waste processing. This system was developed using the PHP programming language using the Codeigniter framework and using Bootstrap.",
    ghLink: "https://github.com/ibrahimajifajarromadhon/ngetrash-new",
    demoLink: "https://ngetrashid.000webhostapp.com/",
  },
];
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="green">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I have worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={6} className="project-card" key={project.id}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
