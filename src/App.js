import React, { useState } from "react";
import "./App.css";
import "./components/MainButtons";

function App() {
  const [buttonStates, setButtonStates] = useState({
    about: { visibility: "", width: "" },
    projects: { visibility: "", width: "" },
    github: { visibility: "", width: "" },
  });
  const [expanded, setExpanded] = useState(false);

  const mouseIn = (event) => {
    console.log("mouse-in");
    setButtonStates((prevState, _) => {
      const newState = { ...prevState };
      newState[event.target.id].width = "210px";
      for (const id of Object.keys(newState)) {
        if (id !== event.target.id) {
          newState[id].visibility = "hidden";
          newState[id].width = "0";
        }
      }
      return newState;
    });
    setExpanded(true);
  };

  const mouseOut = (event) => {
    console.log("mouse-out");
    setButtonStates((prevState, _) => {
      const newState = { ...prevState };
      newState[event.target.id].width = null;
      for (const id of Object.keys(newState)) {
        if (id !== event.target.id) {
          newState[id].visibility = null;
          newState[id].width = null;
        }
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
        {/* <CSSTransition
          in={expanded}
          timeout={300}
          classNames="alert"
          unmountOnExit
          onExited={() => setExpanded(false)}
        > */}
        <button
          onMouseEnter={mouseIn}
          onMouseLeave={mouseOut}
          className="link"
          id="about"
          style={{
            visibility: buttonStates.about.visibility,
            width: buttonStates.about.width,
          }}
        >
          <span>about </span>
        </button>
        <button
          // onMouseEnter={mouseIn}
          // onMouseLeave={mouseOut}
          className="link"
          id="projects"
          style={{
            visibility: buttonStates.projects.visibility,
            width: buttonStates.projects.width,
          }}
        >
          <span>Projects</span>
        </button>
        <button
          // onMouseEnter={mouseIn}
          // onMouseLeave={mouseOut}
          className="link"
          id="github"
          style={{
            visibility: buttonStates.github.visibility,
            width: buttonStates.github.width,
          }}
        >
          <span>GitHub</span>
        </button>
        {/* </CSSTransition> */}
      </div>
    </div>
  );
}

export default App;
