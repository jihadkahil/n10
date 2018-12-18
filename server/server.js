const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
var http = require('http');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

var server = http.createServer(app);
var io = socketIO(server);


io.on('connection',(socket)=>{
    console.log('You are connnected');
    socket.on('disconnect',()=>{
        console.log('You are disconnected');
    })
})



app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
