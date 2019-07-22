import { connect } from 'react-redux';
import getUser from '../../../redux/Actions/UserActions';
import { regUser } from '../../../redux/Actions/UsersListActions';
import { loadPost, clearPosts, postsIsLoading } from '../../../redux/Actions/PostActions';
import RegLog from '../components/RegLog';
import Roles from '../../../redux/Data/Roles';

function mapStateToProps(state) {
  return {
    login: state.login,
    password: state.password
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (login, password) => {
      dispatch(getUser(login, password));
      dispatch(clearPosts());
      dispatch(postsIsLoading(false));
      dispatch(loadPost(login));
    },
    onRegister: (login) => {
      dispatch(
        regUser({
          eMail: login,
          firstName: login,
          lastName: login,
          delRequest: false,
          role: Roles.USER
        })
      );
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegLog);
