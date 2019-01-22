import React, { Component } from "react";
import "./Post.css";
import { ListGroupItem } from "react-bootstrap";

class Post extends Component {
  render() {
    const { post, onDelete } = this.props;
    return (
      <ListGroupItem header="Post-user" Post-user="danger">
        <div className="Post-image">
          <img alt={post.caption} src={post.image} />
        </div>
        <div className="Post-caption">{post.caption}</div>
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => onDelete(post.dataTime)}
        >
          Remove
        </button>
      </ListGroupItem>
    );
  }
}
export default Post;
