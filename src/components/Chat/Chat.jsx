import React, { memo, useState } from "react";
import Message from "../Message/Message";
import Send from "../Send/Send";
import Styles from "./chat.module.css";
import defaultChatvalues from "../../helpers/chatInfo";
import { messageRandom } from "../../helpers/messageRandom";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState(defaultChatvalues);

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
      setMessage("");
    }
  };

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

export default memo(Chat);
