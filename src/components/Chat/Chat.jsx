import React, { useCallback, useEffect, useState } from "react";
import Message from "../Message/Message";
import Send from "../Send/Send";
import Styles from "./chat.module.css";
import { defaultChatvalues } from "../../helpers/defaultChatvalues";
import messageRandom from "../../helpers/messageRandom";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState(defaultChatvalues);

  const sendMessage = useCallback(() => {
    if (message) {
      setChat((prevState) => [
        ...prevState,
        { id: Math.random(), type: "user", message },
      ]);
      setMessage("");
    }
  }, [message]);

  const changeMessage = useCallback((e) => {
    setMessage(e.target.value);
    if (e.key === "Enter") {
      sendMessage();
    }
  }, [sendMessage]);

  useEffect(() => {
    let catMessage = null;
    if (chat[chat.length - 1].type === "user") {
      catMessage = setTimeout(() => {
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

    return () => clearTimeout(catMessage);
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
