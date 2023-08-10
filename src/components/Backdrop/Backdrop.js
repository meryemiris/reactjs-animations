import React from "react";

import "./Backdrop.css";

export default function backdrop(props) {
  const styles = [
    "Backdrop",
    props.show ? "BackdropOpen" : "BackdropClosed",
  ].join(" ");
  return <div className={styles}></div>;
}
