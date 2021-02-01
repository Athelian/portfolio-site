import React, { useState } from "react";
import "./App.css";
import "./components/MainButtons";

function App() {
  const [buttonStates, setButtonStates] = useState({
    about: { display: "", width: "" },
    projects: { display: "", width: "" },
    github: { display: "", width: "" },
  });

  const mouseIn = (event) => {
    setButtonStates((prevState, _) => {
      const newState = { ...prevState };
      newState[event.target.id].width = "210px";
      for (const id of Object.keys(newState)) {
        if (id !== event.target.id) newState[id].display = "none";
      }
      return newState;
    });
  };

  const mouseOut = (event) => {
    setButtonStates((prevState, _) => {
      const newState = { ...prevState };
      newState[event.target.id].width = null;
      for (const id of Object.keys(newState)) {
        if (id !== event.target.id) newState[id].display = null;
      }
      return newState;
    });
  };

  return (
    <div id="menu">
      <div className="title-box" id="title-box">
        <span id="a">
          Eliot <br />
          Austin
          <br /> Forbes
        </span>
        <button
          onMouseEnter={mouseIn}
          onMouseLeave={mouseOut}
          className="link"
          id="about"
          style={{
            display: buttonStates.about.display,
            width: buttonStates.about.width,
          }}
        >
          <span>about </span>
        </button>
        <button
          onMouseEnter={mouseIn}
          onMouseLeave={mouseOut}
          className="link"
          id="projects"
          style={{
            display: buttonStates.projects.display,
            width: buttonStates.projects.width,
          }}
        >
          <span>Projects</span>
        </button>
        <button
          onMouseEnter={mouseIn}
          onMouseLeave={mouseOut}
          className="link"
          id="github"
          style={{
            display: buttonStates.github.display,
            width: buttonStates.github.width,
          }}
        >
          <span>GitHub</span>
        </button>
      </div>
    </div>
  );
}

export default App;
