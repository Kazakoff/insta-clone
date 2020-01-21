const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const posts = require('./Data/PostList');
const users = require('./Data/UsersList');

const app = express();
app.use(express.json());
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
  console.log(posts.postslist[userId]);
});

mongoose
  .connect(
    'mongodb+srv://admin:aebb8aeb@cluster0-curam.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('mongodb started.');
    app.listen(4000, () => {
      console.log('Server started on 4000');
    });
  })
  .catch(() => {
    console.log('Mongodb connection failed.');
  });

// http://localhost:4000/posts?userId=V.K%40vstu.by
