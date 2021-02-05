import React from "react";
import pic from "../images/headshot.jpg";
import "./About.scss";

export default function About(props) {
  return (
    <div id="window">
      <div id="box">
        <span id="text">
          Eliot has been studying programming in his spare time for over a year
          while teaching mathematics and chemistry at a high-end cram school in
          central Tokyo. These days, he has been working full time on several
          full stack applications, with projects in JavaScript, HTML, Dart,
          Fluer Python, Java, AWS, Heroku, React, Vue, CSS, SQL, gmaps C++ and
          Go.
          <br />
          <br />
        </span>

        <img src={pic} id="pic" />
      </div>
    </div>
  );
}
