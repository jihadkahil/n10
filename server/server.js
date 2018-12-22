const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
var {generateMessage} = require('./utils/message');
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
  socket.broadcast.emit('newMessage', generateMessage('Admin','New user joined'));

  // recieve from clide
  socket.on('createMessage', (message) => {
    
    // brodcast to all opened channels
    io.emit('newMessage',generateMessage(message.from,message.text));
    
  });

  

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
