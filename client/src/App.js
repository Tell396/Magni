import './App.css';
import { connect, sendMsg } from './api/index'

function App(props) {
  connect()

  function send() {
    console.log("Hello")
    sendMsg("Hello")
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={send}>
          Hit
        </button>
      </header>
    </div>
  );
}

export default App;
