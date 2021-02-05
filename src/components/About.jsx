import React from "react";
import "./About.scss";

export default function About(props) {
  return (
    <div id="window">
      <div id="box">
        <button id="close-button" onClick={props.back}>
          X
        </button>
        <span id="text">
          Engineer with a background in pharmaceutical research, programming,
          and Oxford commas. My interests have led me to a keen and well honed
          analytical eye well-versed in problem solving based on multiple
          sources of data. More specifically in server engineering and efficient
          system communication across the whole stack. Recently I have built
          projects using C++, Go, SQL, CSS, jQuery, Heroku, HTML,
          Android/iOS(Flutter), gmaps API, Java, Python, Dart, CSS, JavaScript,
          AWS, React, Vue, and more.
          <br />
          <br />
          <a
            href="https://drive.google.com/file/d/1sc1E1NkoAjwPqnBwCaxlP4vB7Wu7wFY_/view?usp=sharing"
            target="_blank"
          >
            See resume!
          </a>
        </span>
      </div>
    </div>
  );
}
