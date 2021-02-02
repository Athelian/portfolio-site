import React, { useState } from "react";
import "./App.css";
import "./components/MainButtons";

function App() {
  const [buttonStates, setButtonStates] = useState({
    about: { visibility: "", width: "", right: "" },
    projects: { visibility: "", width: "", right: "" },
    github: { visibility: "", width: "", right: "" },
  });

  const mouseIn = async (event) => {
    // If the mouse is flicked too quickly, no target id is picked up
    if (!event.target.id) return;

    setButtonStates((prevState, _) => {
      const newState = { ...prevState };
      newState[event.target.id].width = "178px";

      switch (event.target.id) {
        case "projects":
        case "about":
          newState.projects.right = "15px";
          break;
        case "github":
          newState.projects.right = "177px";
      }
      for (const id of Object.keys(newState)) {
        if (id !== event.target.id) {
          newState[id].width = "0";
        }
      }
      return newState;
    });
  };

  const mouseOut = () => {
    setButtonStates((prevState, _) => {
      const newState = { ...prevState };
      for (const value in newState) {
        for (const attribute in newState[value]) {
          newState[value][attribute] = null;
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
        <button
          onMouseEnter={mouseIn}
          onMouseLeave={mouseOut}
          className="link"
          id="about"
          style={{
            // visibility: buttonStates.about.visibility,
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
            right: buttonStates.projects.right,
            width: buttonStates.projects.width,
            // transition: buttonStates.projects.transition,
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
            // visibility: buttonStates.github.visibility,
            width: buttonStates.github.width,
            // transition: buttonStates.github.transition,
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
