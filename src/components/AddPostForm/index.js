import React from "react";
import { PageHeader } from "react-bootstrap";
import { connect } from "react-redux";
import { createPost } from "../../Actions/PostActions";

function mapDispatchToProps(dispatch) {
  return {
    onAddPost: post => {
      dispatch(createPost(post));
    }
  };
}

class AddPostFormE extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", picURL: "" };
  }

  handleTextChange = event => {
    this.setState({ text: event.target.value });
  };

  handlePicURLChange = event => {
    this.setState({ picURL: event.target.value });
  };

  handleReset = e => {
    this.setState({ text: "", picURL: "" });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.picURL.trim() && this.state.text.trim()) {
      console.log(this.state);
      this.props.onAddPost(this.state);
      this.handleReset();
      event.preventDefault();
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Text:
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleTextChange}
          />
        </label>
        <label>
          picture URL:
          <input
            type="text"
            value={this.state.picURL}
            onChange={this.handlePicURLChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const AddPostForm = connect(
  null,
  mapDispatchToProps
)(AddPostFormE);
export default AddPostForm;
