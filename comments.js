// Create web server
// create a route for /comments
// when a request is made to /comments, send the comments array as a response
// to run the server, type node comments.js in the terminal
// open the browser and type localhost:3000/comments
// you should see the comments array as a response
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(comments));
});
server.listen(3000, '