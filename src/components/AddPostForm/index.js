import React from "react";
import { PageHeader } from "react-bootstrap";

class AddPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", picURL: "" };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handlePicURLChange = this.handlePicURLChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  handlePicURLChange(event) {
    this.setState({ picURL: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.text);
    event.preventDefault();
  }

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

export default AddPostForm;
