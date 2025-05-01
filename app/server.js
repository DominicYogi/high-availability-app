// app/server.js

const http = require('http');
const os = require('os');

const PORT = process.env.PORT || 3000;
const INSTANCE_NAME = process.env.INSTANCE_NAME || 'unknown-instance';

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end(`Response from ${INSTANCE_NAME}\n`);
});

server.listen(PORT, () => {
  console.log(`${INSTANCE_NAME} is running on port ${PORT}`);
});
