import React from "react";
import classes from "./Model.module.css";
import ReactDOM from "react-dom";
import Card from "../../UI/Card/Card";

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const ModelOverlay = () => {
  return <Card className={classes["model-overlay"]}></Card>;
};

export default function Model() {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModelOverlay></ModelOverlay>,
        document.getElementById("model-overlay-root")
      )}
    </React.Fragment>
  );
}
