import React, { useState, useEffect } from "react";
import "./App.scss";
import About from "./components/About";
import Projects from "./components/Projects";
import Fruity from "./images/Fruity.png";
import skillTrain from "./images/skillTrain.png";
import warican from "./images/warican.png";
import chess from "./images/chess.png";
import okCupid from "./images/okCupid.png";

function App() {
  const images = {
    Fruity: Fruity,
    skillTrain: skillTrain,
    warican: warican,
    chess: chess,
    okCupid: okCupid,
  };
  const buttonsMain = ["Projects", "About", "GitHub"];
  const [buttonsActiveState, setButtonsActiveState] = useState(true);
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
      if (buttonsMain.includes(event.target.id)) {
        newState[event.target.id].width = "178px";
        for (const button of buttons) {
          if (button !== event.target.id) {
            newState[button].width = "0"; // the other buttons disappear
          }
        }
      } else {
        newState[event.target.id].bottom = "40px";
        for (const button of buttons) {
          newState[button].transition = "opacity 0.2s, bottom 1s";
          if (button !== event.target.id) newState[button].opacity = "0.5";
        }
      }
      switch (event.target.id) {
        case "Projects":
        case "About":
          newState.Projects.right = "15px";
          break;
        case "GitHub":
          newState.Projects.right = "177px";
          break;
        default:
      }

      return newState;
    });
  };

  const mouseOut = () => {
    setButtonStates((prevState, _) => {
      const newState = { ...prevState };
      for (const value in newState) {
        for (const attribute in newState[value]) {
          if (buttonsMain.includes(value) && projectState) {
            break;
          }
          if (
            !projectState &&
            !buttonsMain.includes(value) &&
            attribute === "opacity"
          ) {
            newState[value][attribute] = "0";
          } else {
            newState[value][attribute] = attribute === "opacity" ? "1" : null; //hack
          }
        }
      }
      return newState;
    });
  };

  useEffect(() => {
    if (!projectState) mouseOut();
  }, [projectState]);

  const createButton = (name, buttons) => {
    return (
      <button
        key={name}
        onMouseEnter={
          buttonsActiveState
            ? (name === "Projects" || name === "GitHub" || name === "About") &&
              projectState
              ? null
              : (e) => mouseIn(buttons)(e)
            : null
        }
        onMouseLeave={
          buttonsActiveState
            ? (name === "Projects" || name === "GitHub" || name === "About") &&
              projectState
              ? null
              : mouseOut
            : null
        }
        className="link"
        id={name}
        onClick={() => {
          if (buttonsActiveState && !aboutState) {
            switch (name) {
              case "GitHub":
                window.open("https://github.com/Athelian", "_blank");
                break;
              case "About":
                setAboutState(true);
                break;
              case "Projects":
                setButtonsActiveState(false);
                setProjectState(projectState ? false : true);
                setTimeout(() => setButtonsActiveState(true), 100); //Avoid spam
                break;
              case "skillTrain":
                window.open(
                  "https://github.com/skilltrain/skilltrain-app",
                  "_blank"
                );
                break;
              case "Fruity":
                window.open(
                  "https://github.com/Athelian/fruit-importer",
                  "_blank"
                );
                break;
              case "warican":
                window.open("https://github.com/team-chahan/warican", "_blank");
                break;
              case "chess":
                window.open(
                  "https://github.com/Athelian/Chess-Board",
                  "_blank"
                );
                break;
              case "okCupid":
                window.open("https://github.com/Athelian/OkCupid", "_blank");
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
        <span className="button-title">
          {name}

          {projectState && name !== "Projects" ? (
            <img className="logo" src={images[name]} alt={name} />
          ) : null}
        </span>
      </button>
    );
  };

  return (
    <div id="app-window">
      <div id="menu" style={aboutState ? { opacity: 0.2 } : { opacity: 1 }}>
        <div id="title-box">
          <span id="name" style={projectState ? { display: "none" } : null}>
            Eliot <br />
            Austin
            <br /> Forbes
          </span>
          <div id="buttons">
            {buttonsMain.map((name) => createButton(name, buttonsMain))}
          </div>
          {projectState ? (
            <Projects
              createButton={createButton}
              setButtonStates={setButtonStates}
              buttonStates={buttonStates}
            />
          ) : null}
        </div>
      </div>
      {result}
      {aboutState ? <About back={() => setAboutState(false)} /> : null}
    </div>
  );
}

export default App;
