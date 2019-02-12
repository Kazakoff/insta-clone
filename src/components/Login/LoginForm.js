import React from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { browserHistory } from "react-router";
import { history } from "../../store";
import emailPropType from "email-prop-type";
import PropTypes from "prop-types";
import "./Login.css";

class LoginForm extends React.Component {
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

  handleAction = () => {
    this.props.handleAction(this.state);
  };

  render() {
    return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
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
        <div>
          <ButtonToolbar>
            <Button bsStyle="danger" onClick={this.handleAction} bsSize="large">
              {this.props.title}
            </Button>
          </ButtonToolbar>
        </div>
      </Modal.Dialog>
    );
  }
}
LoginForm.propTypes = {
  login: emailPropType.isRequired,
  password: PropTypes.string
};
export default LoginForm;
