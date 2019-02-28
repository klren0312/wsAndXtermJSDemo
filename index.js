const WebSocket = require('ws');
var qrcode = require('qrcode-terminal');
const wss = new WebSocket.Server({ port: 8080 });

console.log(wss.on('connection', function connection(ws) {
  // ws.send('something');
  // ws.send('something'+Math.floor(Math.random()*100));
  qrcode.generate('http://github.com', {small: true},  function (qrcode) {
    ws.send((qrcode))
    console.log(qrcode)
  })
  
}))