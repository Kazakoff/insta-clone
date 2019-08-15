import React from 'react';
import PropTypes from 'prop-types';
import emailPropType from 'email-prop-type';
import { Button } from 'react-bootstrap';
import LoginForm from '../../../shared/EntranceForm/LoginForm';
import './styles.scss';

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
        <div className="buttonBar">
          <Button className="buttonBar__bigButton" onClick={this.setLoginMode}>
            Sign in
          </Button>
          <Button className="buttonBar__bigButton" onClick={this.setRegisterMode}>
            Sign up{' '}
          </Button>
        </div>
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
