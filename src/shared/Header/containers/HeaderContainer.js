import { connect } from 'react-redux';
import Header from '../components/Header';

function mapStateToProps(reduxState) {
  return {
    user: reduxState.user
  };
}

export default connect(mapStateToProps)(Header);
