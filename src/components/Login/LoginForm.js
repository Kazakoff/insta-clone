import React from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { css, jsx } from "@emotion/core";
import emailPropType from "email-prop-type";
import PropTypes from "prop-types";
import "./Login.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: "V.K@vstu.by", password: "www", show: false };
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

  handleClose() {
    this.setState({ show: false });
  }

  render() {
    return (
      <Modal.Dialog
        show={this.state.show}
        centered="true"
        onHide={this.handleClose}
      >
        <Modal.Header closeButton />
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
