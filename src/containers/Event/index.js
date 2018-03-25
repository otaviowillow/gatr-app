import React from 'react';
import { connect } from 'react-redux';

import { getEvent } from './actions';

class Event extends React.Component {
  componentDidMount() {
    this.props.getEvent();
  }
  render() {
    return(
      <p>Event</p>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.event.isFetching,
    event: state.event.item
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEvent: () => {
      dispatch(getEvent());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Event);
