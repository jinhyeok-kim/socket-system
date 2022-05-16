const net = require('net');

const client = net.createConnection({ port: 7777 }, () => {
  // 'connect' listener.
  console.log('connected to server!');
  client.write('Hello!!!!!\r\n');
});

client.on('data', (data) => {
  console.log(data.toString());
  // client.end();
});

client.on('end', () => {
  console.log('disconnected from server');
});
