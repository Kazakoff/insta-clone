import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './styles.scss';

class AddPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', picURL: '' };
  }

  handleTextChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleReset = () => {
    this.setState({ text: '', picURL: '' });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.text.trim()) {
      this.props.onAddPost(this.state, this.props.user);
      this.handleReset();
    }
  };

  render() {
    return (
      <div className="addForm">
        <label className="addForm__messageField">
          Text:
          <input type="text" name="text" value={this.state.text} onChange={this.handleTextChange} />
        </label>
        <label className="addForm__picURLField">
          picture URL:
          <input
            type="text"
            name="picURL"
            value={this.state.picURL}
            onChange={this.handleTextChange}
          />
        </label>
        <Button classeName="addForm__bigButton" onClick={this.handleSubmit}>
          Add
        </Button>
      </div>
    );
  }
}

AddPostForm.propTypes = {
  onAddPost: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired
};
export default AddPostForm;
