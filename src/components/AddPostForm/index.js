import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createSelector } from "reselect";
import { createPost } from "../../Actions/PostActions";
import * as style from "../../styles";

function mapDispatchToProps(dispatch) {
  return {
    onAddPost: (state, user) => {
      dispatch(createPost(state, user));
    }
  };
}

const getUser = state => {
  return state.user;
};
const getUserMemoized = createSelector(
  getUser,
  state => {
    return state.user;
  }
);

function mapStateToProps(state) {
  return {
    // user: state.user
    user: getUserMemoized(state)
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

  handleReset = () => {
    this.setState({ text: "", picURL: "" });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.text.trim()) {
      this.props.onAddPost(this.state, this.props.user);
      this.handleReset();
    }
  };
  render() {
    return (
      <div>
        <label>
          Text:
          <input type="text" name="text" value={this.state.text} onChange={this.handleTextChange} />
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
  onAddPost: PropTypes.func,
  user: PropTypes.string
};

const AddPostForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPostFormRaw);

export default AddPostForm;
