const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  console.log('Request received');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.on('error', err => {
  console.error('Server error:', err);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

//Simulate a large request
const request = require('request');
request('http://localhost:3000', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});