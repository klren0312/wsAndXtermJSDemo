const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.send('something');
  ws.send('something'+Math.floor(Math.random()*100));
});