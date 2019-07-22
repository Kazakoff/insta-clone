import React from 'react';
// import { PropTypes } from 'prop-types';
import Post from './Wall/components/Post/index';

class PostErrorCather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: '' };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    this.setState({ errorInfo: info });
  }

  render() {
    const { errorInfo, hasError } = this.state;
    if (hasError) {
      return <Post key={new Date()} post={{ content: errorInfo, pic: '' }} onDelete={undefined} />;
    }
    return this.props.children;
  }
}
/* PostErrorCather.propTypes = {
  children: PropTypes.Component
};
PostErrorCather.defaultProps = {
  children: []
};
*/
export default PostErrorCather;
