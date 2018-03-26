import React from 'react';
import { connect } from 'react-redux';

import { getEvent } from './actions';

import { ContentWrapper, Aside } from '../../styled-components';

import Marker from '../../components/Marker';
import GatrMap from '../../components/GatrMap';

class Event extends React.Component {
  componentDidMount() {
    this.props.getEvent(this.props.match.params.id);
  }
  render() {
    if(this.props.isFetching) {
      return <p>Loading...</p>;
    }
    return (
      <ContentWrapper>
        <Aside size="60%">
          <p>{this.props.event.name}</p>
        </Aside>
        <Aside size="40%">
          <GatrMap
            center={{
              lat: this.props.venue.location.latitude,
              lng: this.props.venue.location.longitude
            }}
            zoom={16}>
            <Marker
              marker={this.props.event.category}
              lat={this.props.venue.location.latitude}
              lng={this.props.venue.location.longitude}
            />
          </GatrMap>
        </Aside>
      </ContentWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.event.isFetching,
    event: state.event.item,
    venue: state.event.item.venue
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEvent: (id) => {
      dispatch(getEvent(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Event);
