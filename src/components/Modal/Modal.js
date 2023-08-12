import React from "react";

import "./Modal.css";

export default function modal(props) {
  const styles = [
    `Modal`,
    props.show === "entering"
      ? "ModalOpening"
      : props.show === "exiting"
      ? "ModalClosing"
      : null,
  ].join(" ");

  return (
    <div className={styles}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
}
