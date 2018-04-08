import React from 'react';
import { connect } from 'react-redux';
import { Form, Text, TextArea, Checkbox } from 'react-form';

import { createEvent, changeAddress } from './actions';

import { getEventsForLocation } from '../Events/actions';

import GatrMap from '../../components/GatrMap';
import Marker from '../../components/Marker';
import GoogleSuggest from '../../components/GoogleSuggest';

import { ContentWrapper, Aside, Button } from '../../styled-components';

class CreateEvent extends React.Component {
  render() {
    return (
      <ContentWrapper>
        <Aside size="60%">
          <div style={{zIndex: 5, position: 'relative'}}>
            <GoogleSuggest
              changeAddress={address => this.props.changeAddress(address)}
              onSuggestSelect={address => this.props.getEventsForLocation(address)}
              address={this.props.form.address}
            />
          </div>
          <GatrMap
            noControls
            center={this.props.loc.center}
            zoom={this.props.loc.zoom}>
            <Marker
              marker="EVENT_UNDEFINED"
              lat={this.props.loc.center.lat}
              lng={this.props.loc.center.lng}
            />
          </GatrMap>
        </Aside>
        <Aside size="40%">
          <Form onSubmit={submittedValues => this.props.createEvent(submittedValues)}>
            {formApi => (
              <form onSubmit={formApi.submitForm} id="form2">
                <label htmlFor="nameOfEvent">Name of the event</label>
                <Text field="nameOfEvent" id="nameOfEvent" />
                <label htmlFor="eventDescription">Bio</label>
                <TextArea field="eventDescription" id="eventDescription" />
                <label htmlFor="authorize" className="mr-2">Authorize</label>
                <Checkbox field="authorize" id="authorize" className="d-inline-block" />
                <Button type="primary">Submit</Button>
              </form>
            )}
          </Form>
        </Aside>
      </ContentWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    form: state.createEvent.form,
    loc: state.events.loc
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (form) => {
      dispatch(createEvent(form));
    },
    changeAddress: (address) => {
      dispatch(changeAddress(address));
    },
    getEventsForLocation: (loc) => {
      dispatch(getEventsForLocation(loc));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
