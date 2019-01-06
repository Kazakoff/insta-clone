import React from "react";
import { PageHeader } from "react-bootstrap";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <PageHeader>
        {" "}
        <a href="/">
          <img src="../../Insta-logo.png" alt="Insta-logo" /> Instagram
        </a>
      </PageHeader>
    );
  }
}
export default Header;
