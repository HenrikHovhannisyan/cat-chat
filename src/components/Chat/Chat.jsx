import React, { useState } from "react";
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
  let meow = ["Meow"];

  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    setChat((prevState) => [
      ...prevState,
      { id: Math.random(), type: "user", message },
    ]);
    setTimeout(() => {
      setChat((prevState) => [
        ...prevState,
        { id: Math.random(), type: "cat", message: meow },
      ]);
    }, 1000);
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
      <div className="container mt-5 mb-5 d-flex justify-content-center">
        <input
          className={Styles.input}
          type="text"
          name="message"
          value={message}
          onChange={changeMessage}
          placeholder="Write Message"
        />
        <button className={Styles.button} onClick={() => sendMessage()}>
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};

export default Chat;
