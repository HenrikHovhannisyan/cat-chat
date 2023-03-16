import React, { memo, useMemo } from "react";
import Styiles from "./message.module.css";
import Cat from "../../assets/cat.png";
import User from "../../assets/user.png";

const Message = ({ type, message }) => {
  const isTypeCat = useMemo(() => type === "cat", [type]);

  return (
    <div className={`${isTypeCat ? Styiles.cat : ""} pt-3 pb-3`}>
      <div className={`${Styiles.message} container d-flex align-items-center`}>
        <img
          src={isTypeCat ? Cat : User}
          className={Styiles.avatar}
          alt={type}
        />

        <div>
          <p
            className={`${Styiles.message} ${
              isTypeCat ? Styiles.cat_message : ""
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
