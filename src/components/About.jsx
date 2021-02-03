import React from "react";
import pic from "../images/headshot.jpg";
import { Link } from "react-router-dom";

export default function About(props) {
  return (
    <div id="about-window">
      <div id="about-box">
        <span id="about-text">
          Eliot has been studying programming in his spare time for over a year
          while teaching mathematics and chemistry at a high-end cram school in
          central Tokyo. These days, he has been working full time on several
          full stack applications, with projects in JavaScript, HTML, Dart,
          Fluer Python, Java, AWS, Heroku, React, Vue, CSS, SQL, gmaps C++ and
          Go.
          <br />
          <br />
          <Link id="about-back" to="/" onClick={() => props.hook()}>
            Back
          </Link>
        </span>

        <img src={pic} id="about-pic" />
      </div>
    </div>
  );
}
