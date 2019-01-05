import React from "react";
import { PageHeader } from "react-bootstrap";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <PageHeader>
        <a className="Insta-logo" href="/">
          Instagram
        </a>
      </PageHeader>
    );
  }
}
export default Header;
