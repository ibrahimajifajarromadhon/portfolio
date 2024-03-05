import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import ngetrash from "../assets/projects/ngetrash.jpg";
import peduliBelajar from "../assets/projects/peduli-belajar.png";

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

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={ngetrash}
              isBlog={false}
              title="Project NgeTrash"
              description="Project NgeTrash is a project that uses the PHP programming language with the Codeigniter 3 framework with a MySQL database. NgeTrash allows users to view the history of waste collection, the status of waste payment payments that have been made, and recycling balances which can later be used to pay waste fees. This project aims to record waste collection from each user."
              ghLink="https://github.com/ibrahimajifajarromadhon/ngetrash"
              demoLink="https://ngetrashid.000webhostapp.com/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={peduliBelajar}
              isBlog={false}
              title="Project Peduli Belajar"
              description="Projects Peduli Belajar is a project that uses the Javascript programming language with the React Js library and collaborates with Back End Java. Care for Learning allows users to see available courses along with their prices, types, ratings, and users can also purchase courses if they are paid, then users can immediately follow the courses they have purchased by following the available videos and tutorials. This project aims to provide online technology courses at affordable prices."
              ghLink="https://github.com/ibrahimajifajarromadhon/peduli-belajar"
              demoLink="https://peduli-belajar.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects