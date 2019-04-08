import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import emailPropType from "email-prop-type";
import { getUser } from "../../Actions/UserActions";
import { regUser } from "../../Actions/UsersListActions";
import { loadPost, clearPosts, postsIsLoading } from "../../Actions/PostActions";
import LoginForm from "./LoginForm";
import logoimg from "../../img/logo.png";
import * as style from "../../styles";
import Roles from "../../Data/Roles";

class EntranceFormRaw extends React.Component {
  constructor() {
    super();
    this.state = {
      dlgShow: false,
      dlgTitle: "Sign up",
      dlgHandleOk: this.handleRegister,
      dlgHandleCancel: this.handleCancel
    };
  }
  setRegisterMode = () => {
    this.setState({
      dlgShow: true,
      dlgTitle: "Sign up",
      dlgHandleOk: this.handleRegister,
      dlgHandleCancel: this.handleCancel
    });
  };

  setLoginMode = () => {
    this.setState({
      dlgShow: true,
      dlgTitle: "Sign in",
      dlgHandleOk: this.handleLogin,
      dlgHandleCancel: this.handleCancel
    });
  };

  handleLogin = ({ login, password }) => {
    if (login.trim() && password.trim()) {
      this.props.onLogin(login, password);
      this.props.router.push("/posts");
    }
  };

  handleRegister = ({ login, password }) => {
    if (login.trim() && password.trim()) {
      this.props.onRegister(login, password);
      this.props.router.push("/posts");
    }
  };

  handleCancel = () => {
    this.setState({ dlgShow: false });
  };

  render() {
    return (
      <div>
        <div className={style.logo}>
          <img src={logoimg} alt="logo" />
        </div>
        <style.CenteredButtonToolbar>
          <style.BigButton onClick={this.setLoginMode} size="lg">
            Sign in
          </style.BigButton>
          <style.BigButton onClick={this.setRegisterMode} size="lg">
            Sign up
          </style.BigButton>
        </style.CenteredButtonToolbar>
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
      dispatch(clearPosts());
      dispatch(postsIsLoading(false));
      dispatch(loadPost(login));
    },
    onRegister: login => {
      dispatch(
        regUser({
          eMail: login,
          firstName: login,
          lastName: login,
          delRequest: false,
          role: Roles.USER
        })
      );
    }
  };
}

EntranceFormRaw.propTypes = {
  onLogin: PropTypes.func,
  onRegister: PropTypes.func,
  dlgHandleOk: PropTypes.func,
  dlgHandleCancel: PropTypes.func,
  login: emailPropType.isRequired,
  password: PropTypes.string,
  router: PropTypes.object.isRequired //  если required то router подкидывается в props
};

const EntranceForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntranceFormRaw);
export default EntranceForm;
