const socket = new WebSocket("ws://localhost:8080/ws")

const connect = cb => {
  console.log("Attempting connection...")

  socket.onopen = () => console.log("Successfully connected!")
  socket.onmessage = msg => {
    cb(msg)
  }
  socket.onclose = event => console.log(`Socket close connection: ${event}`)
  socket.onerror = error => console.log(`Socket error: ${error}`)
}

const sendMsg = msg => {
  console.log(`Sending message: ${msg}`)
  socket.send(msg)
}

export { connect, sendMsg }
