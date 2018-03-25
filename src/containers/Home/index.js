import React from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import { facebookLogin } from '../System/actions';

// import { ContentWrapper, Aside, P } from '../../styled-components';

class Home extends React.Component {
  // componentDidMount() {
  //   this.props.getEventsForLocation();
  // }
  render() {
    return(
      <div>
        <p>asdsa</p>
        <FacebookLogin
          appId="140423843185571"
          autoLoad
          reauthenticate
          callback={response => this.props.facebookLogin(response.accessToken)}
          render={renderProps => (
            <button onClick={renderProps.onClick}>This is my custom FB button</button>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.system.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    facebookLogin: (token) => {
      dispatch(facebookLogin(token));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
