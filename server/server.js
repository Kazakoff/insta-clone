const express = require("express");
const cors = require("cors");
const posts = require("./data/PostList");
const users = require("./data/UsersList");

const app = express();
app.use(cors());
app.use(function(request, response, next) {
  console.log("Request!");
  next();
});
app.get("/users", function(request, response) {
  response.send(users);
});
app.get("/posts", function(request, response) {
  let userId = request.query.userId;
  response.send(posts.postslist[userId]);
});
app.listen(4000);
// http://localhost:4000/posts?userId=V.K%40vstu.by
