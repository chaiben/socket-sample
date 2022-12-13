var express = require('express'); 
var app = express(); 
var server = require('http').Server(app); 
var io = require('socket.io')(server);

const messages = [{
  id: 1,
  text: "Hola!!",
  author: "Marçal"
}]

app.use(express.static('public'))

io.on('connection', (socket) => {
  console.log('Alguien se ha conectado');
  socket.emit('messages', messages)

  socket.on('new-message', (data) => {
    console.log("New message arrived")
    messages.push(data)

    io.sockets.emit('messages', messages)
  })
});

server.listen(8080, function() { 
  console.log('Servidor corriendo en http://localhost:8080');
});