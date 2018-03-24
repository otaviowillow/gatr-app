import React from 'react';
import { connect } from 'react-redux';

class Main extends React.Component {
  render() {
    return(
      <p>test</p>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.main.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAuctions: () => {
      dispatch(getAuctions());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
