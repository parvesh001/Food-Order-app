import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import globalStyle from "../../Assets/global-styles/bootstrap.min.module.css";
import cx from "classnames";

export default function Header(props) {
  return (
    <header className={cx(classes.header, globalStyle['px-3'], globalStyle['px-md-3'], globalStyle['px-lg-5'])}>
      <h2 className={cx(globalStyle['fs-3'], globalStyle['fs-md-2'])}>It'sTasty</h2>
      <HeaderCartButton onClick={props.onCartClick} />
    </header>
  );
}
