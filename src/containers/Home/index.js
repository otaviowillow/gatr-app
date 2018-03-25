import React from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';

// import { getEventsForLocation } from './actions';

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
          id={'140423843185571'}
          autoLoad={false}
          fields="name,email,picture"
          icon="fa-facebook"
          textButton="Sign in and see what's up!"
          cssClass="facebook-button"
          response={response => console.log(response)}
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getEventsForLocation: () => {
//       dispatch(getEventsForLocation());
//     }
//   };
// };

export default connect(mapStateToProps)(Home);
