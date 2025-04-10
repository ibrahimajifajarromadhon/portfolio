/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
  return (
    <Card
      className="project-card-view"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "space-between",
      }}
    >
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          height: "200px",
          objectFit: "contain",
          alignSelf: "flex-start",
          borderRadius: "10%",
        }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Card.Title style={{marginBottom:"15px", marginTop:"-5px", fontWeight:"700"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize:"15px" }}>
          {props.description}
        </Card.Text>
        </Card.Body>

        <Button
          variant="primary"
          href={props.ghLink}
          target="_blank"
          style={{
            margin: "0px 10px 0px 10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "flex-end",
            textAlign: "center",
            position: "relative",
          }}
        >
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{
              margin: "10px",
              display: "flex",
              justifyContent: "center",
              alignContent: "flex-end",
              alignItems: "center",
              textAlign: "center",
              position: "static",
            }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
    </Card>
  );
};
export default ProjectCard;
