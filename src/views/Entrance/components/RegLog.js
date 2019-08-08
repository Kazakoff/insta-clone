/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import emailPropType from 'email-prop-type';
import styled from '@emotion/styled';
import * as style from './styles';
import LoginForm from '../../../shared/EntranceForm/LoginForm';
import Container from './st';

class RegLog extends React.Component {
  constructor() {
    super();
    this.state = {
      dlgShow: false,
      dlgTitle: 'Sign up',
      dlgHandleOk: this.handleRegister,
      dlgHandleCancel: this.handleCancel
    };
  }

  setRegisterMode = () => {
    this.setState({
      dlgShow: true,
      dlgTitle: 'Sign up',
      dlgHandleOk: this.handleRegister,
      dlgHandleCancel: this.handleCancel
    });
  };

  setLoginMode = () => {
    this.setState({
      dlgShow: true,
      dlgTitle: 'Sign in',
      dlgHandleOk: this.handleLogin,
      dlgHandleCancel: this.handleCancel
    });
  };

  handleLogin = ({ login, password }) => {
    if (login.trim() && password.trim()) {
      this.props.onLogin(login, password);
      this.props.router.push('/posts');
    }
  };

  handleRegister = ({ login, password }) => {
    if (login.trim() && password.trim()) {
      this.props.onRegister(login, password);
      this.props.router.push('/posts');
    }
  };

  handleCancel = () => {
    this.setState({ dlgShow: false });
  };

  render() {
    return (
      <div>
        <style.CenteredButtonToolbar>
          <style.BigButton onClick={this.setLoginMode}>Sign in</style.BigButton>
          <style.BigButton onClick={this.setRegisterMode}>Sign up</style.BigButton>
        </style.CenteredButtonToolbar>
        <LoginForm
          handleOk={this.state.dlgHandleOk}
          handleCancel={this.state.dlgHandleCancel}
          title={this.state.dlgTitle}
          show={this.state.dlgShow}
        />
        <Container> This is lightgreen. </Container>
      </div>
    );
  }
}

RegLog.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
  dlgHandleOk: PropTypes.func.isRequired,
  dlgHandleCancel: PropTypes.func.isRequired,
  login: emailPropType.isRequired,
  password: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired //  если required то router подкидывается в props
};

export default RegLog;
