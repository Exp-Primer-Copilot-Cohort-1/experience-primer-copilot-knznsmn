// Create web server
// Create a route for comments
// Send a response with comments
// Start the server

const express = require('express');
const app = express();
const comments = require('./comments');

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

