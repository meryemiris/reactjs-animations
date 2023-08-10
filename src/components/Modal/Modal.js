import React from "react";

import "./Modal.css";

export default function modal(props) {
  const styles = ["Modal", props.show ? "ModalOpen" : "ModalClosed"];

  return (
    <div className={styles.join(" ")}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
}
