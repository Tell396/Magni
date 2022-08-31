import React, { Component } from "react";
import ChatMessage from "../ChatMessage/ChatMessage";

import "./ChatHistory.scss";

const ChatHistory = (props) => {
  return (
    <div className="ChatHistory">
      <h2>Chat History</h2>

      {props.chatHistory.map((msg, index) => {
        return <ChatMessage key={index} message={msg.data} />;
      })}
    </div>
  );
};

export default ChatHistory;
