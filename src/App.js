import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const buttons = ["Projects", "About", "GitHub"];
  const [menuOpacityState, setMenuOpacityState] = useState("100%");
  const [buttonStates, setButtonStates] = useState({
    About: { width: "", right: "" }, // left
    Projects: { width: "", right: "" }, // middle
    GitHub: { width: "", right: "" }, // right
  });

  const mouseIn = async (event) => {
    // if the mouse is flicked too quickly, no target id is picked up
    if (!event.target.id) return;

    setButtonStates((prevState, _) => {
      const newState = { ...prevState }; // cannot directly mutate + return previous state (oversight of react)
      newState[event.target.id].width = "178px"; // take up ~95% of menu
      switch (event.target.id) {
        case "Projects":
        case "About":
          newState.Projects.right = "15px";
          break;
        case "GitHub":
          newState.Projects.right = "177px";
          break;
      }
      for (const id of Object.keys(newState)) {
        if (id !== event.target.id) {
          newState[id].width = "0"; // the other buttons disappear
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

  const back = () => {
    console.log("yay");
    setMenuOpacityState("100%");
  };

  const createButton = (name) => {
    return (
      <Link to={name !== "GitHub" ? `/${name}` : "/"}>
        <button
          onMouseEnter={mouseIn}
          onMouseLeave={mouseOut}
          className="link"
          id={name}
          onClick={() => {
            switch (name) {
              case "GitHub":
                return window.open("https://github.com/Athelian", "_blank");
              case "About":
              case "Projects":
                return setMenuOpacityState("10%");
            }
          }}
          style={{
            right: buttonStates[name].right,
            width: buttonStates[name].width,
          }}
        >
          <span className="button-title">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </span>
        </button>
      </Link>
    );
  };

  return (
    <Router>
      <div id="menu" style={{ opacity: menuOpacityState }}>
        <div id="title-box">
          <span id="name">
            Eliot <br />
            Austin
            <br /> Forbes
          </span>
          <div id="buttons">{buttons.map((name) => createButton(name))}</div>
        </div>
      </div>
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/about">
          <About
            hook={() => {
              setMenuOpacityState(null);
            }}
          />
        </Route>
        <Route path="/Projects">
          <Projects
            hook={() => {
              setMenuOpacityState(null);
            }}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
