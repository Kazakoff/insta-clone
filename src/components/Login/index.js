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
//import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";
import LoginForm from "./LoginForm";

function mapStateToProps(state) {
  return {
    login: state.login,
    password: state.password
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (login, password) => {
      dispatch(getUser(login, password));
      dispatch(clearPost());
      dispatch(loadPost(posts[login]));
    }
  };
}

class EntranceFormE extends React.Component {
  state = {
    dlgShow: false,
    dlgTitle: "Register",
    dlgHandleOk: this.handleRegister,
    dlgHandleCancel: this.handleCancel
  };

  setRegisterMode = () => {
    this.setState({
      dlgShow: true,
      dlgTitle: "Register",
      dlgHandleOk: this.handleRegister,
      dlgHandleCancel: this.handleCancel
    });
  };
  setLoginMode = () => {
    this.setState({
      dlgShow: true,
      dlgTitle: "Login",
      dlgHandleOk: this.handleLogin,
      dlgHandleCancel: this.handleCancel
    });
  };

  handleLogin = ({ login, password }) => {
    if (login.trim() && password.trim()) {
      this.props.onLogin(login, password);
      this.props.router.push("/posts");
      //history.push("/posts");
    }
  };

  handleRegister = ({ login, password }) => {
    if (login.trim() && password.trim()) {
      this.props.onLogin(login, password);
      this.props.router.push("/posts");
      //history.push("/posts");
    }
  };
  handleCancel = ({ login, password }) => {
    this.setState({ dlgShow: false });
  };

  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button
            className="ctrl-btn"
            variant="Dark"
            onClick={this.setLoginMode}
            size="lg"
          >
            Login
          </Button>
          <Button variant="Dark" onClick={this.setRegisterMode} size="lg">
            Register
          </Button>
        </ButtonToolbar>
        <LoginForm
          handleOk={this.state.dlgHandleOk}
          handleCancel={this.state.dlgHandleCancel}
          title={this.state.dlgTitle}
          show={this.state.dlgShow}
        />
      </div>
    );
  }
}
EntranceFormE.propTypes = {
  dlgHandleOk: PropTypes.func,
  dlgHandleCancel: PropTypes.func,
  login: emailPropType.isRequired,
  password: PropTypes.string,
  router: PropTypes.object.isRequired //  если required то router подкидывается в props
};

const EntranceForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntranceFormE);
export default EntranceForm;
