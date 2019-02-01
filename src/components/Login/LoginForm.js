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
}

  render() {
    return (
      <div className="jumbotron">
        <div className="jumbotron">
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
            <Button variant="primary" onClick={this.handleAction} size="lg">
              {this.props.title}
            </Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}
LoginForm.propTypes = {
  login: emailPropType.isRequired,
  password: PropTypes.string,
};
export default LoginForm;
