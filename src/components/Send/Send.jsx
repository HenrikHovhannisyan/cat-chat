import React, { memo } from "react";
import Styles from "./send.module.css";

const Send = ({ value, change, send }) => {
  return (
    <div className={Styles.input_container}>
      <input
        className={Styles.input}
        type="text"
        name="message"
        value={value}
        onChange={change}
        onKeyDown={change}
        placeholder="Write Message"
      />

      <button className={Styles.button} onClick={send}>
        <i className="fas fa-paper-plane"></i>
      </button>
    </div>
  );
};

export default memo(Send);
