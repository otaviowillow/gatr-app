import React from 'react';
import { connect } from 'react-redux';

import { getEventsForLocation } from './actions';

import { ContentWrapper, Aside, P } from '../../styled-components';

class Events extends React.Component {
  componentDidMount() {
    this.props.getEventsForLocation();
  }
  render() {
    return(
      <ContentWrapper>
        <Aside size="30%">
          <P>asdds</P>
        </Aside>
      </ContentWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.events.isFetching,
    currentEvents: state.events.currentEvents
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEventsForLocation: () => {
      dispatch(getEventsForLocation());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
