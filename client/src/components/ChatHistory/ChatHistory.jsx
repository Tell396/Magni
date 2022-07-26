import React from "react"
import "./ChatHistory.scss"

const ChatHistory = (props) => {
  //console.log(props.chatHistory)

  const array = Object.keys(props.chatHistory)
  const messages = array.map((msg, index) => {
    //<p key={index}>{msg}[props.chatHistory]</p>
    const value = object[];

    // Perform your desired logic here then return a new value
    return value.data;
  })

  console.log(messages)

  return (
    <div>

    </div>
  )
}

export default ChatHistory
