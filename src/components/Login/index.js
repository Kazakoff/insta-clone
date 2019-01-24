import React from "react";
import { PageHeader } from "react-bootstrap";
import { connect } from "react-redux";
import { getUser } from "../../Actions/UserActions";

function mapStateToProps(state) {
  return {
    login: state.login,
    password: state.password
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: ({ login, password }) => {
      console.log(login + password);
      dispatch(getUser(login, password));
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
    if (this.state.login.trim() && this.state.password.trim()) {
      console.log(this.state);
      this.props.onLogin(this.state);
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
            onChange={this.handleLoginChange}
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
  mapStateToProps,
  mapDispatchToProps
)(LoginFormE);
export default LoginForm;
