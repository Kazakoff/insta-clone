import React from "react";
import Post from "./Post";

class PostErrorCather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: "" };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    this.setState({ errorInfo: info });
  }

  render() {
    if (this.state.hasError) {
      return <Post key={new Date()} post={{ content: "Bad post", pic: "" }} onDelete={undefined} />;
    }
    return this.props.children;
  }
}

export default PostErrorCather;
