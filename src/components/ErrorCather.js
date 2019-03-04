import React from "react";

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
      return (
        <div>
          <h1>Ошибка при загрузке поста!</h1>
          <p> {this.state.errorInfo} </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default PostErrorCather;
