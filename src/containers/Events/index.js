import React from 'react';
import { connect } from 'react-redux';
import { parse } from 'qs';

import { getEventsForLocation, handleMapCenterChange, selectEvent } from './actions';

import { ContentWrapper, Aside, Main } from '../../styled-components';

import EventHeader from '../../components/EventHeader';
import GatrMap from '../../components/GatrMap';
import Marker from '../../components/Marker';

class Events extends React.Component {
  componentWillMount() {
    const query = parse(location.search.substr(1));
    this.props.getEventsForLocation({
      lat: parseFloat(query.lat),
      lng: parseFloat(query.lng)
    });
  }
  render() {
    if(this.props.isFetching.all) {
      return <p>Loading...</p>;
    }

    return(
      <ContentWrapper>
        <Aside size="40%">
          {
            this.props.isFetching.events ?
              <p>...loading...</p>
              : this.props.events.map((event, i) => (
                <EventHeader
                  key={i}
                  event={event}
                  selected={event.id === this.props.hoveredId}
                  onHover={eventId => eventId !== this.props.hoveredId ? this.props.selectEvent(eventId) : null}
                />
              ))
          }
        </Aside>
        <Main size="60%">
          <GatrMap
            onChange={r => this.props.handleMapCenterChange(r.center)}
            center={this.props.loc.center}
            zoom={this.props.loc.zoom}>
            {this.props.events.map((event, i) => (
              <Marker
                key={i}
                marker={event}
                clustered={this.props.events.filter(e => e.venue.name === event.venue.name)}
                selected={event.id === this.props.hoveredId}
                lat={event.venue.location.latitude}
                lng={event.venue.location.longitude}
                onHover={eventId => eventId !== this.props.hoveredId ? this.props.selectEvent(eventId) : null}
              />
            ))}
          </GatrMap>
        </Main>
      </ContentWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.events.isFetching,
    events: state.events.list,
    hoveredId: state.events.hoveredId,
    loc: state.events.loc
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEventsForLocation: (loc) => {
      dispatch(getEventsForLocation(loc));
    },
    handleMapCenterChange: (loc) => {
      dispatch(handleMapCenterChange(loc));
    },
    selectEvent: (id) => {
      dispatch(selectEvent(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
