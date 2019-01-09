import React from "react";
import { PageHeader } from "react-bootstrap";
import logo from "../../img/logo.png";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <PageHeader>
        <nav className="haeder-logo">
          <a href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </nav>
        <nav className="header-title"> Instagram </nav>
        <nav className="header-user"> k@mail.ru </nav>
      </PageHeader>
    );
  }
}
export default Header;
