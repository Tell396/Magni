import React from "react"
import "./ChatHistory.scss"

const ChatHistory = (props) => {
  const obj = Object.assign({}, props);

  const messages = props.chatHistory.map((msg, index) => {
    <p key={index}>{msg}[props.chatHistory]</p>
  })

  return (
    <div>
    {/* {obj.chatHistory.map((msg, index) => {
        console.log(obj.chatHistory)
        //return <p key={index}>{msg}</p> 
      })}*/}

    </div>
  )
}

export default ChatHistory
