const net = require('net');


const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    const sendData = data.toString();
    console.log(sendData);
    socket.write(sendData);
  });

  // socket.end('goodbye server\n');
}).on('error', (err) => {
  // Handle errors here.
  throw err;
});

server.listen(7777, (socket) => {
  console.log('opened server on', server.address());
});

server.on('connection', (stream) => {
  console.log('someone connected!');
});

server.on('error', (err) => {
  console.log('err!: ', err);
});