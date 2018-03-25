import React from 'react';
import { connect } from 'react-redux';

import { getEventsForLocation } from './actions';

import { ContentWrapper, Aside, P } from '../../styled-components';

class Main extends React.Component {
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
    isFetching: state.main.isFetching,
    currentEvents: state.main.currentEvents
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEventsForLocation: () => {
      dispatch(getEventsForLocation());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
