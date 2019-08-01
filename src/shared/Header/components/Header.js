import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Header.css';
import PropTypes from 'prop-types';
import logo from '../../../img/logo.png';

const Header = ({ user }) => (
  <PageHeader>
    <div className="header-logo">
      <a href="/">
        <img className="logo" src={logo} alt="logo" />
      </a>
    </div>
    <div className="header-title"> Instagram </div>
    <Link to="/login">Выход </Link>
    <div className="header-user"> {user} </div>
  </PageHeader>
);

Header.propTypes = {
  user: PropTypes.string,
  onDelete: PropTypes.func
};

Header.defaultProps = {
  user: 'Guest',
  onDelete: () => {}
};
export default Header;
