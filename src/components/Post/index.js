import React, { Component } from "react";
import "./Post.css";

class Post extends Component {
  render() {
    const image = this.props.image;
    const caption = this.props.caption;
    return (
      <article className="Post" ref="Post">
        <header>
          <div className="Post-user" />
        </header>
        <div className="Post-image">
          <img alt={caption} src={image} />
        </div>
        <div className="Post-caption">{caption}</div>
      </article>
    );
  }
}
export default Post;
