import React from 'react';
import { connect } from 'react-redux';

import { getEventsForLocation } from './actions';

class Event extends React.Component {
  componentDidMount() {
    // this.props.getEventsForLocation();
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
    getEventsForLocation: () => {
      dispatch(getEventsForLocation());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Event);
