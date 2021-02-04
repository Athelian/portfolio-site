import React from "react";
import { Link } from "react-router-dom";
import projects from "../images/projects.pdf";

export default function Projects(props) {
  const buttons = ["skillTrain", "Fruity", "warican", "chess", "okCupid"];

  return (
    <div id="buttons">
      {/* <Link id="about-back" to="/" onClick={() => props.hook()}>
        Back
      </Link> */}
      {buttons.map((name) => props.createButton(name, buttons))}
    </div>
  );
}
