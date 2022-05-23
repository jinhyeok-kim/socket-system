const net = require('net');
const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

const client = net.createConnection({ port: 7777, host: 'localhost' }, () => {
  console.log('connected to server!');

  rl.on('line', function(line){
      if (line == 'exit') {
        rl.close();
      }
      client.write(line);
  });

  rl.on('close', function(){
      process.exit();
  });

});

client.on('data', (data) => {
  console.log(data.toString());

});

client.on('end', () => {
  console.log('disconnected from server');
  client.end();
});
