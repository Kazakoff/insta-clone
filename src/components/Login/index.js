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
import LoginForm from"./LoginForm"

export const LOGIN_MODE = "LOGIN_MODE";
export const REGISTER_MODE = "REGISTER_MODE";

function mapStateToProps(state) {
  return {
    login: state.login,
    password: state.password
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: ( login, password ) => {
      dispatch(getUser(login, password));
      dispatch(clearPost());
      dispatch(loadPost(posts[login]));
    }
  };
}


class EntranceFormE extends React.Component {
  state = { mode: LOGIN_MODE};

  setRegisterMode = () => {  this.setState({ mode: REGISTER_MODE})}
  setLoginMode = () => {  this.setState({ mode: LOGIN_MODE})}


  handleLogin = ({login, password}) => {
    if (login.trim() && password.trim()) {
      this.props.onLogin(login, password);
      this.props.router.push("/posts");
      //history.push("/posts");
    }
  };

  handleRegister = ({login, password}) => {
    if (login.trim() && password.trim()) {
      this.props.onLogin(login, password);
      this.props.router.push("/posts");
      //history.push("/posts");
    }
  };

  render() {
    return (
      <div>
          <ButtonToolbar>
            <Button variant="primary" onClick={this.setLoginMode} size="lg">
              Login
            </Button>
            <Button variant="secondary" onClick={this.setRegisterMode} size="lg">
              Register
            </Button>
          </ButtonToolbar>
          <LoginForm handleAction = {this.state.mode === LOGIN_MODE ? this.handleLogin : this.handleRegister } 
           title =  {this.state.mode === LOGIN_MODE ? "Login" : "Register" } 
          />
      </div>
    );
  }
}
EntranceFormE.propTypes = {
  login: emailPropType.isRequired,
  password: PropTypes.string,
  router: PropTypes.object.isRequired  //  если required то router подкидывается в props
};

const EntranceForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntranceFormE);
export default EntranceForm;
