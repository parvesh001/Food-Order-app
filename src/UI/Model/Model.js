import React from "react";
import classes from "./Model.module.css";
import ReactDOM from "react-dom";
import Card from "../../UI/Card/Card";

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const ModelOverlay = (props) => {
  return <Card className={classes["model-overlay"]}>{props.children}</Card>;
};

export default function Model(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        document.getElementById("model-overlay-root")
      )}
    </React.Fragment>
  );
}
