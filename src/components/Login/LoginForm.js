import React from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
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

  handleOk = () => {
    this.props.handleOk(this.state);
  };

  handleCancel = () => {
    console.log(this.state);
    this.props.handleCancel(this.state);
  };

  render() {
    return (
      <Modal
        show={this.props.show}
        centered="true"
        onHide={this.props.handleCancel}
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
            <Button bsStyle="danger" onClick={this.handleOk} bsSize="large">
              {this.props.title}
            </Button>
            <Button bsStyle="danger" onClick={this.handleCancel} bsSize="large">
              Cancel
            </Button>
          </ButtonToolbar>
        </div>
      </Modal>
    );
  }
}
LoginForm.propTypes = {
  login: emailPropType.isRequired,
  password: PropTypes.string
};
export default LoginForm;
