import React, { useState } from "react";
import { connect, sendMsg } from './api/index'
import './App.scss';

// Import components
import Header from './components/Header/Header'
import ChatHistory from './components/ChatHistory/ChatHistory'

const App = (props) => {
  const [chatHistory, setChatHistory] = useState([])

  connect((msg) => {
    console.log("New Message")
    console.log(typeof msg)
    setChatHistory(msg)
    console.log(chatHistory);
  })

  const send = () => {
    console.log("hello");
    sendMsg("hello");
  }

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <button onClick={send}>Hit</button>
    </div>
  );
}

/* class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message")
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
      console.log(this.state);
    });
  }

  send() {
    console.log("hello");
    sendMsg("hello");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <button onClick={this.send}>Hit</button>
      </div>
    );
  }
} */

export default App;
