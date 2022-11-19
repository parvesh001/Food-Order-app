import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <header className={classes.header}>
      <h2>It'sTasty</h2>
      <HeaderCartButton onClick={props.onCartClick} />
    </header>
  );
}
