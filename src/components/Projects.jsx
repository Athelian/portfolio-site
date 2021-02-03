import React from "react";
import { Link } from "react-router-dom";
import projects from "../images/projects.pdf";

export default function Projects(props) {
  return (
    <div>
      <Link id="about-back" to="/" onClick={() => props.hook()}>
        Back
      </Link>
      <embed id="projects-pdf" src={projects} width="800px" height="2100px" />
    </div>
  );
}
