const express = require('express');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname)));

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

const wss = new WebSocket.Server({ server });

wss.on('connection', socket => {
  console.log('✅ A new client connected');

  socket.on('message', msg => {
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg);
      }
    });
  });

  socket.on('close', () => {
    console.log('❌ A client disconnected');
  });
});
