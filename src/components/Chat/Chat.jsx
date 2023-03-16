import React, { useCallback, useEffect, useState } from "react";
import Message from "../Message/Message";
import Send from "../Send/Send";
import Styles from "./chat.module.css";
import messageRandom from "../../helpers/messageRandom";
import { DEFAULT_CHAT_VALUE } from "../../constants";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState(DEFAULT_CHAT_VALUE);

  const sendMessage = useCallback(() => {
    if (message) {
      setChat((prevState) => [
        ...prevState,
        { id: Math.random(), type: "user", message },
      ]);
      setMessage("");
    }
  }, [message]);

  const changeMessage = useCallback(
    (e) => {
      setMessage(e.target.value);
      if (e.key === "Enter") {
        sendMessage();
      }
    },
    [sendMessage]
  );

  useEffect(() => {
    if (chat[chat.length - 1].type === "user") {
      const catMessage = setTimeout(() => {
        setChat((prevState) => [
          ...prevState,
          {
            id: Math.random(),
            type: "cat",
            message: messageRandom(),
          },
        ]);
      }, 500);
      return () => clearTimeout(catMessage);
    }
  }, [chat]);

  return (
    <div className="container-fluid p-0">
      <h1 className={Styles.title}>Cat Chat</h1>
      <div className={Styles.chat}>
        {chat.map((i) => {
          return <Message key={i.id} type={i.type} message={i.message} />;
        })}
      </div>
      <Send value={message} change={changeMessage} send={sendMessage} />
    </div>
  );
};

export default Chat;
