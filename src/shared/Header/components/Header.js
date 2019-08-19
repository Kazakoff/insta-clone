import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import PropTypes from 'prop-types';
import logo from '../../../img/logo.png';

const Header = ({ user }) => (
  <div className="head">
    <div className="head__header-logo">
      <a href="/">
        <img className="head__logo" src={logo} alt="logo" />
      </a>
    </div>
    <div className="head__header-title"> LInstagram </div>

    <div className="head__header-controls">
      {' '}
      {user}
      <Link to="/login"> LOGOUT </Link>
    </div>
  </div>
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
