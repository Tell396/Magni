import React, { Component } from "react";
import "./ChatHistory.scss";

const ChatHistory = (props) => {
  return (
    <div className="ChatHistory">
      <h2>Chat History</h2>
      {props.chatHistory.map((msg, index) => {
        
        console.log(msg)
        return (
          <p key={index}>{msg.data}</p>
        )
      })}
    </div>
  )
}


export default ChatHistory;
