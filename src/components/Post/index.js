import React, { Component } from "react";
import "./Post.css";
import { ListGroupItem } from "react-bootstrap";

class Post extends Component {
  render() {
    const post = this.props.post;
    const onDelete = this.props.onDelete;
    return (
      <ListGroupItem header="Post-user" Post-user="danger">
        <div className="Post-image">
          <img alt={post.caption} src={post.pic} />
        </div>
        <div className="Post-caption">{post.content}</div>
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
