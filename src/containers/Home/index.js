import React from 'react';
import { connect } from 'react-redux';


import { facebookLogin, logOut } from '../System/actions';

// import { Section, H2 } from '../../styled-components';

import Landing from './Landing';


class Home extends React.Component {
  render() {
    return(
      <div>
        <Landing facebookLogin={response => this.props.facebookLogin(response.accessToken)} />

        {/* <Section>
          <H2>Gatr makes it easy to hang out in your city</H2>
          <ul>
            <li>Bars, parties, lectures, you name it. Everything happening around you.</li>
            <li>Save all dates in one single and simple to use place</li>
            <li>You can host private events on Gatr and invite your friends for it</li>
            <li>Gatr tells you what places are packed and which ones are chill</li>
          </ul>
        </Section>

        <Section>
          <H2>Download and go out tonight</H2>
          <h3>Available for Android and iOS</h3>
        </Section> */}
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
    },
    logOut: (token) => {
      dispatch(logOut(token));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
