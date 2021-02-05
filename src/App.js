import React, { useState } from "react";
import "./App.scss";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const buttons = ["Projects", "About", "GitHub"];
  const [buttonsActiveState, setButtonsActiveState] = useState(true);
  const [homeState, setHomeState] = useState(true);
  const [projectState, setProjectState] = useState(false);
  const [aboutState, setAboutState] = useState(false);

  const [buttonStates, setButtonStates] = useState({
    About: {},
    Projects: {},
    GitHub: {},
    warican: {},
    skillTrain: {},
    chess: {},
    okCupid: {},
    Fruity: {},
  });

  const mouseIn = (buttons) => (event) => {
    // if the mouse is flicked too quickly, no target id is picked up
    if (!event.target || !event.target.id) return;

    setButtonStates((prevState) => {
      const newState = { ...prevState };
      buttons.includes(event.target.id)
        ? (newState[event.target.id].width = "178px")
        : (newState[event.target.id].width = "290px");
      switch (event.target.id) {
        case "Projects":
        case "About":
          newState.Projects.right = "15px";
          break;
        case "GitHub":
          newState.Projects.right = "177px";
          break;
        case "warican":
          newState.chess.right = "15px";
          newState.warican.right = "30px";
          newState.Fruity.right = "320px";
          newState.skillTrain.right = "335px";
        default:
      }
      for (const button of buttons) {
        if (button !== event.target.id) {
          newState[button].width = "0"; // the other buttons disappear
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
          if (attribute === "opacity") continue;
          if (buttons.includes(value) && projectState) {
            break;
          }
          newState[value][attribute] = null;
        }
      }
      return newState;
    });
  };

  const createButton = (name, buttons) => {
    return (
      <button
        key={name}
        onMouseEnter={
          buttonsActiveState
            ? name === "Projects" && projectState
              ? null
              : (e) => mouseIn(buttons)(e)
            : null
        }
        onMouseLeave={
          buttonsActiveState
            ? name === "Projects" && projectState
              ? null
              : mouseOut
            : null
        }
        className="link"
        id={name}
        onClick={() => {
          if (buttonsActiveState) {
            switch (name) {
              case "GitHub":
                window.open("https://github.com/Athelian", "_blank");
                break;
              case "About":
                setHomeState(false);
                setAboutState(true);
                break;
              case "Projects":
                if (!projectState) {
                  setButtonsActiveState(false);
                  setHomeState(false);
                  setProjectState(true);
                  setTimeout(() => setButtonsActiveState(true), 100); //Avoid spam
                }
                break;
              default:
                return;
            }
          }
        }}
        style={{
          ...buttonStates[name],
        }}
      >
        <span className="button-title">{name}</span>
      </button>
    );
  };

  return (
    <div>
      <div id="menu" style={projectState ? { opacity: 1 } : { opacity: 1 }}>
        <div id="title-box">
          <span id="name" style={projectState ? { display: "none" } : null}>
            Eliot <br />
            Austin
            <br /> Forbes
          </span>
          <div id="buttons">
            {buttons.map((name) => createButton(name, buttons))}
          </div>
          {projectState ? (
            <Projects
              hook={() => setHomeState(true)}
              createButton={createButton}
              setButtonStates={setButtonStates}
              buttonStates={buttonStates}
            />
          ) : null}
        </div>
      </div>
      {aboutState ? <About hook={() => setHomeState(true)} /> : null}
    </div>
  );
}

export default App;
