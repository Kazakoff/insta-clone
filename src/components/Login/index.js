import React from "react";
import { PageHeader } from "react-bootstrap";
import { connect } from "react-redux";
import { getUser } from "../../Actions/UserActions";

function mapDispatchToProps(dispatch) {
  return {
    onAddPost: post => {
      dispatch(getUser(post));
    }
  };
}

class LoginFormE extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: "", password: "" };
  }

  handleLoginChange = event => {
    this.setState({ login: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    // alert("A name was submitted: " + this.state.text);
    event.preventDefault();
    if (this.state.picURL.trim() && this.state.text.trim()) {
      console.log(this.state);

      event.preventDefault();
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Login:
          <input
            type="text"
            value={this.state.login}
            onChange={this.handlePasswordChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const LoginForm = connect(
  null,
  mapDispatchToProps
)(LoginFormE);
export default LoginForm;
