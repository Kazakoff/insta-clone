const express = require('express');
const cors = require('cors');
const posts = require('./Data/PostList');
const users = require('./Data/UsersList');

const app = express();
app.use(cors());
app.use((request, response, next) => {
  next();
});
app.get('/users', (request, response) => {
  response.send(users);
});
app.get('/posts', (request, response) => {
  const { userId } = request.query;
  response.send(posts.postslist[userId]);
});
app.listen(4000);
// http://localhost:4000/posts?userId=V.K%40vstu.by
