import React, { memo, useState } from "react";
import Message from "../Message/Message";
import Styles from "./chat.module.css";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      id: Math.random(),
      type: "cat",
      message: "Meow, meow meow meow, meow meow?",
    },
  ]);

  const messageRandom = () => {
    let randomNum = (num) => Math.floor(Math.random() * num);
    let symbols = [".", "!", "?"];
    let meow = [];
    for (let i = 0; i <= randomNum(10); i++) {
      meow.push("meow");
    }

    return `${meow.join(" ")}${symbols[randomNum(2)]}`;
  };

  const changeMessage = (e) => {
    setMessage(e.target.value);
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (message) {
      setChat((prevState) => [
        ...prevState,
        { id: Math.random(), type: "user", message },
      ]);
      setTimeout(() => {
        setChat((prevState) => [
          ...prevState,
          {
            id: Math.random(),
            type: "cat",
            message: messageRandom(),
          },
        ]);
      }, 500);
    }
    setMessage("");
  };

  return (
    <div className="container-fluid p-0">
      <h1 className={Styles.title}>Cat Chat</h1>
      <div className={Styles.chat}>
        {chat.map((i) => {
          return <Message key={i.id} type={i.type} message={i.message} />;
        })}
      </div>
      <div className={Styles.input_container}>
        <input
          className={Styles.input}
          type="text"
          name="message"
          value={message}
          onChange={changeMessage}
          onKeyDown={changeMessage}
          placeholder="Write Message"
        />
        <button className={Styles.button} onClick={() => sendMessage()}>
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};

export default memo(Chat);
