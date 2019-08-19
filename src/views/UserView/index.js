import React, { Component } from 'react';
import HeaderContainer from '../../shared/Header/containers/HeaderContainer';
import WallContainer from './Wall/containers/WallContainer';
import AddPostFormContainer from './AddPostForm/containers/AddPostFormContainer';
import PostErrorCather from './ErrorCather';

class UserView extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="userView">
        <PostErrorCather>
          <HeaderContainer className="head" />
          <div className="content">
            <AddPostFormContainer />
            <WallContainer />
          </div>
        </PostErrorCather>
      </div>
    );
  }
}

export default UserView;
