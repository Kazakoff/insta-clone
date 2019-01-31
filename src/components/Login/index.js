import React from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getUser } from "../../Actions/UserActions";
import { browserHistory } from "react-router";
import { history } from "../../store";
import { loadPost, clearPost } from "../../Actions/PostActions";
import posts from "../../Data/PostList";
import emailPropType from "email-prop-type";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";

function mapStateToProps(state) {
  return {
    login: state.login,
    password: state.password
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: ({ login, password }) => {
      dispatch(getUser(login, password));
      dispatch(clearPost());
      dispatch(loadPost(posts[login]));
    }
  };
}

class LoginFormE extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: "V.K@vstu.by", password: "www" };
  }

  handleLoginChange = event => {
    this.setState({ login: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleLogin = event => {
    event.preventDefault();
    if (this.state.login.trim() && this.state.password.trim()) {
      console.log(this.state);
      this.props.onLogin(this.state);
      this.props.router.push("/posts");
      //history.push("/posts");
    }
  };

  handleRegister = event => {
    event.preventDefault();
    if (this.state.login.trim() && this.state.password.trim()) {
      console.log(this.state);
      this.props.onLogin(this.state);
      this.props.router.push("/posts");
      //history.push("/posts");
    }
  };

  render() {
    return (
      <div class="jumbotron">
        <div class="jumbotron">
          <label>
            Login:
            <input
              type="text"
              value={this.state.login}
              onChange={this.handleLoginChange}
            />
          </label>
        </div>
        <label>
          Password:
          <input
            type="text"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </label>
        <div>
          <ButtonToolbar>
            <Button variant="primary" onClick={this.handleRegister} size="lg">
              Login
            </Button>
            <Button variant="secondary" onClick={this.handleLogin} size="lg">
              Register
            </Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}
LoginFormE.propTypes = {
  login: emailPropType.isRequired,
  password: PropTypes.string,
  router: PropTypes.object.isRequired
};

const LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormE);
export default LoginForm;
