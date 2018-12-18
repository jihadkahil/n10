const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
 

    //after user get it's connection from server side
    // the server will emit for the user this messages
  socket.emit('newMessage', {
    from: 'John',
    text: 'See you then',
    createdAt: 123123
  });


  //socket.broadcast.emit ==> sent to all connected send success and the new user is connected
  socket.broadcast.emit('newMessage', {
    from: 'Admin',
    text: 'New user joined',
    createdAt: new Date().getTime()
  });

  // recieve from clide
  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text +"Brodcast",
      createdAt: new Date().getTime()
    });
    
  });

  

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
