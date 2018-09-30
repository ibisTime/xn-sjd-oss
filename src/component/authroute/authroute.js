import React from 'react';
import { withRouter } from 'react-router-dom';
import { isFullUser } from 'api/user';
import { getUserId } from 'common/js/util';

@withRouter
class AuthRoute extends React.Component {
  componentDidMount() {
    if (getUserId()) {
      isFullUser().then((url) => {
        if (url) {
          this.props.history.replace(url);
        }
      }).catch(() => {});
    } else if (this.props.location.pathname !== '/register') {
      this.props.history.push('/login');
    }
  }
  render() {
    return null;
  }
}

export default AuthRoute;
