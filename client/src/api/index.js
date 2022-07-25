const socket = new WebSocket("ws://localhost:8080/ws")

const connect = () => {
  console.log("Attempting connection...")

  socket.onopen = () => console.log("Successfully connected!")
  socket.onmessage = msg => console.log(msg)
  socket.onclose = event => console.log(`Socket close connection: ${event}`)
  socket.onerror = error => console.log(`Socket error: ${error}`)
}

const sendMsg = msg => {
  console.log(`Sending message: ${msg}`)
  socket.send(msg)
}

export {connect, sendMsg}
