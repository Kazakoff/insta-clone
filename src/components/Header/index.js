import React from "react";
import { PageHeader } from "react-bootstrap";
import logo from "../../img/logo.png";
import { Link } from "react-router";
import "./Header.css";
import PropTypes from "prop-types";

const Header = ({ user }) => {
  return (
    <PageHeader>
      <nav className="header-logo">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
      </nav>
      <nav className="header-title"> Instagram </nav>
      <Link to="/login">Выход </Link>
      <nav className="header-user"> {user} </nav>
    </PageHeader>
  );
};

Header.propTypes = {
  user: PropTypes.string,
  onDelete: PropTypes.func
};
export default Header;
