import React, { useState } from 'react';
import { connect, sendMsg } from './api/index'
import './App.scss';

// Import components
import Header from './components/Header/Header'
import ChatHistory from './components/ChatHistory/ChatHistory'

function App(props) {
  const [chatHistory, setChatHistory] = useState([])

  connect((msg) => {
    setChatHistory(msg)
    //console.log(chatHistory)
    console.log(`adsd: ${msg.data}`)
  })

  function send() {
    //console.log("Hello")
    sendMsg("Hello")
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <ChatHistory chatHistory={chatHistory} />
        <button onClick={send}>
          Send message
        </button>
      </header>
    </div>
  );
}

export default App;
