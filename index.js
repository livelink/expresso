const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('drawing', (points) => {
    io.emit('drawing', points);
  });
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});