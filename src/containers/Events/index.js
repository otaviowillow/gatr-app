import React from 'react';
import { connect } from 'react-redux';
import { parse } from 'qs';

import { getEventsForLocation } from './actions';

import { ContentWrapper, Aside } from '../../styled-components';

import EventHeader from '../../components/EventHeader';

class Events extends React.Component {
  componentWillMount() {
    const query = parse(location.search.substr(1));

    this.props.getEventsForLocation({
      lat: query.lat,
      lng: query.lng
    });
  }
  render() {
    if(this.props.isFetching) {
      return <p>Loading...</p>;
    }

    return(
      <ContentWrapper>
        <Aside size="40%">
          {this.props.events.map((event, i) => (
            <EventHeader key={i} title={event.name} />
          ))}
        </Aside>
      </ContentWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.events.isFetching,
    events: state.events.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEventsForLocation: (loc) => {
      dispatch(getEventsForLocation(loc));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);