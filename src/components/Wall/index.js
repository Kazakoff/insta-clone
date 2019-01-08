import React, { Component } from "react";
import "./Wall.css";
import Post from "../Post";
import PostList from "../../Data/PostList";

class Wall extends Component {
  constructor() {
    super();
    this.state = {
      posts: PostList["I.I@vstu.by"]
    };
  }
  render() {
    return (
      <div>
        {this.state.posts.slice(0).map(post => (
          <Post image={post.pic} caption={post.content} />
        ))}
      </div>
    );
  }
}

export default Wall;
