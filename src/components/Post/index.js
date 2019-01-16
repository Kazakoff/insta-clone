import React, { Component } from "react";
import "./Post.css";
import { ListGroupItem } from "react-bootstrap";

class Post extends Component {
  render() {
    const { image, caption } = this.props;
    return (
      <ListGroupItem header="Post-user" Post-user="danger">
        <div className="Post-image">
          <img alt={caption} src={image} />
        </div>
        <div className="Post-caption">{caption}</div>
      </ListGroupItem>
    );
  }
}
export default Post;
