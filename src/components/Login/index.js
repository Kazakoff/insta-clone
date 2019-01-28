import React from "react";
import { PageHeader } from "react-bootstrap";
import { connect } from "react-redux";
import { getUser } from "../../Actions/UserActions";
import { browserHistory } from "react-router";
import { history } from "../../store";
import { loadPost, clearPost } from "../../Actions/PostActions";
import posts from "../../Data/PostList";

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
      dispatch(clearPost());
      dispatch(loadPost(posts[login]));
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
    event.preventDefault();
    if (this.state.login.trim() && this.state.password.trim()) {
      console.log(this.state);
      this.props.onLogin(this.state);
      //this.context.router.push("/");
      history.push("/posts");
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
