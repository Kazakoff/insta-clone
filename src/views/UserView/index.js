import React, { Component } from 'react';
import HeaderContainer from '../../shared/Header/containers/HeaderContainer';
import WallContainer from './Wall/containers/WallContainer';
import AddPostFormContainer from './AddPostForm/containers/AddPostFormContainer';
import PostErrorCather from './ErrorCather';

class UserView extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <PostErrorCather>
          <HeaderContainer />
          <AddPostFormContainer />
          <WallContainer />
        </PostErrorCather>
      </div>
    );
  }
}

export default UserView;
