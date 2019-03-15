import React from "react";
import { connect } from "react-redux";
import { createPost } from "../../Actions/PostActions";
import PropTypes from "prop-types";
import * as style from "../../styles.js";

function mapDispatchToProps(dispatch) {
  return {
    onAddPost: post => {
      dispatch(createPost(post));
    }
  };
}

class AddPostFormRaw extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", picURL: "" };
  }

  handleTextChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleReset = e => {
    this.setState({ text: "", picURL: "" });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.text.trim()) {
      this.props.onAddPost(this.state);
      this.handleReset();
    }
  };
  render() {
    return (
      <div>
        <label>
          Text:
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleTextChange}
          />
        </label>
        <label>
          picture URL:
          <input
            type="text"
            name="picURL"
            value={this.state.picURL}
            onChange={this.handleTextChange}
          />
        </label>
        <style.BigButton onClick={this.handleSubmit}>Add</style.BigButton>
      </div>
    );
  }
}

AddPostFormRaw.propTypes = {
  onAddPost: PropTypes.func
};

const AddPostForm = connect(
  null,
  mapDispatchToProps
)(AddPostFormRaw);

export default AddPostForm;
