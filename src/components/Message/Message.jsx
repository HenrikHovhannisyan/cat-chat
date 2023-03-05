import React, { memo } from "react";
import Styiles from "./message.module.css";
import Cat from "../../assets/cat.png";
import User from "../../assets/user.png";

const Message = ({ type, message }) => {
  return (
    <div className={`${type === "cat" ? Styiles.cat : ""} pt-3 pb-3`}>
      <div className={`${Styiles.message} container d-flex align-items-center`}>
        <img
          src={type === "cat" ? Cat : User}
          className={Styiles.avatar}
          alt={type}
        />
        
        <div>
          <p
            className={`${Styiles.message} ${
              type === "cat" ? Styiles.cat_message : ""
            }`}
          >
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Message);
