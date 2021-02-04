import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const buttons = ["Projects", "About", "GitHub"];
  const [menuOpacityState, setMenuOpacityState] = useState("100%");
  const [nameDisplayState, setNameDisplayState] = useState(null);
  const [buttonsActiveState, setButtonsActiveState] = useState(true);

  const [buttonStates, setButtonStates] = useState({
    About: { width: "", right: "", display: "", left: "", backgroundcolor: "" }, // left
    Projects: {
      width: "",
      right: "",
      display: "",
      left: "",
      backgroundcolor: "",
    }, // middle
    GitHub: {
      width: "",
      right: "",
      display: "",
      left: "",
      backgroundcolor: "",
    }, // right
    warican: {
      width: "",
      right: "",
      display: "",
      left: "",
      backgroundcolor: "",
      opacity: "",
    },
    skillTrain: {
      width: "",
      right: "",
      display: "",
      left: "",
      backgroundcolor: "",
      opacity: "",
    },
    chess: {
      width: "",
      right: "",
      display: "",
      left: "",
      backgroundcolor: "",
      opacity: "",
    },
    okCupid: {
      width: "",
      right: "",
      display: "",
      left: "",
      backgroundcolor: "",
    },
    Fruity: {
      width: "",
      right: "",
      display: "",
      left: "",
      backgroundcolor: "",
    },
  });

  const mouseIn = (buttons) => (event) => {
    // if the mouse is flicked too quickly, no target id is picked up
    if (!event.target || !event.target.id) return;

    setButtonStates((prevState, _) => {
      const newState = { ...prevState }; // cannot directly mutate + return previous state (oversight of react)
      event.target.id === "GitHub" ||
      event.target.id === "About" ||
      event.target.id === "Projects"
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
          if (value === "Projects" && nameDisplayState === "none") {
            newState.Projects.width = null;
            break;
          }
          if (
            (value === "GitHub" || value === "About") &&
            nameDisplayState === "none"
          ) {
            break;
          }
          newState[value][attribute] = null;
        }
      }
      return newState;
    });
  };

  const back = () => {
    setMenuOpacityState(null);
  };

  const createButton = (name, buttons) => {
    return (
      <Link key={name} to={name !== "GitHub" ? `/${name}` : "/"}>
        <button
          onMouseEnter={
            buttonsActiveState
              ? name === "Projects" && nameDisplayState === "none"
                ? null
                : (e) => mouseIn(buttons)(e)
              : null
          }
          onMouseLeave={
            name === "Projects" && nameDisplayState === "none" ? null : mouseOut
          }
          className="link"
          id={name}
          onClick={() => {
            switch (name) {
              case "GitHub":
                window.open("https://github.com/Athelian", "_blank");
                break;
              case "About":
                setMenuOpacityState("10%");
                break;
              case "Projects":
                if (nameDisplayState === null) {
                  setButtonStates((prevState, _) => {
                    const newState = { ...prevState };
                    newState.GitHub.display = "none";
                    newState.About.display = "none";
                    newState.Projects.right = "350px";
                    newState.Projects.width = null;
                    newState.Projects.backgroundcolor = "black";
                    return newState;
                  });
                  setNameDisplayState("none");
                  setButtonsActiveState(false);
                  setTimeout(() => setButtonsActiveState(true), 1000);
                }
                break;
              default:
                return;
            }
          }}
          style={{
            left: buttonStates[name].left,
            right: buttonStates[name].right,
            width: buttonStates[name].width,
            display: buttonStates[name].display,
            backgroundColor: buttonStates[name].backgroundcolor,
          }}
        >
          <span className="button-title">{name}</span>
        </button>
      </Link>
    );
  };

  return (
    <Router>
      <div id="menu" style={{ opacity: menuOpacityState }}>
        <div id="title-box">
          <span id="name" style={{ display: nameDisplayState }}>
            Eliot <br />
            Austin
            <br /> Forbes
          </span>
          <div id="buttons">
            {buttons.map((name) => createButton(name, buttons))}
          </div>
          <Route path="/Projects">
            <Projects hook={() => back()} createButton={createButton} />
          </Route>
        </div>
      </div>
      <Switch>
        <Route path="/about">
          <About hook={() => back()} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
