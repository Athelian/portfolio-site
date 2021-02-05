import React, { useEffect } from "react";
import "./Projects.scss";

export default function Projects(props) {
  const buttons = ["skillTrain", "Fruity", "warican", "chess", "okCupid"];
  const { buttonStates, setButtonStates } = props;

  useEffect(() => {
    //Pop up in menu post-render frame
    setButtonStates(() => {
      buttonStates.GitHub.display = "none";
      buttonStates.About.display = "none";
      buttonStates.Projects.right = "350px";
      buttonStates.Projects.width = null;
      buttonStates.Projects.backgroundColor = "black";
      for (const button of buttons) {
        buttonStates[button].opacity = 1;
      }
      return buttonStates;
    });
  }, []);

  return (
    <div id="buttons">
      {buttons.map((name) => props.createButton(name, buttons))}
    </div>
  );
}
