const express = require("express");
const postslist = require("./data/PostList");
const userslist = require("./data/UsersList");

const app = express();
app.use(function (request, response, next) {

    console.log("Request!");
    next();
});
app.get("/users", function (request, response) {
    response.send(userslist);
});
app.get("/posts", function (request, response) {
    let userId = request.query.userId;
    console.log(userId);
    response.send(postslist[userId]);
});
app.listen(4000);
// http://localhost:4000/posts?userId=V.K%40vstu.by