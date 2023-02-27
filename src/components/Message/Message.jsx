import React from "react";
import Styiles from "./message.module.css";
import Cat from "../../assets/cat.png";
import User from "../../assets/user.png";

const Message = ({ type, message }) => {
  return (
    <div className={`${Styiles.message} ${type === "cat" ? Styiles.cat : ""}`}>
      <div className="container d-flex align-items-center">
        <img
          src={type === "cat" ? Cat : User}
          className={Styiles.avatar}
          alt={type}
        />
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
