// var socket = io.connect('http://localhost:8080', {'forceNew': true});
const socket = io()

socket.on('messages', (data) => {
  console.log(data)
  render(data)
})

const render = (messages) => {
  const html = messages.map((message) => `<div>
    <strong>${message.author}: </strong>
    <em>${message.text}</em>
  </div>`).join("")
  document.getElementById('messages').innerHTML = html
}
 
const addMessage = (e) => {
  const payload = {
    author: document.getElementById('author').value,
    text: document.getElementById('text').value
  }
  console.log(payload)
  socket.emit('new-message', payload)
  return false
}