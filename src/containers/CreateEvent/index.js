import React from 'react';
import { connect } from 'react-redux';
import { Form, Text, TextArea, Checkbox } from 'react-form';

import { createEvent, setEventImage, changeAddress } from './actions';

import { getMapForPosition } from '../Events/actions';

import ImageDrop from '../../components/ImageDrop';
import GatrMap from '../../components/GatrMap';
import Marker from '../../components/Marker';
import GoogleSuggest from '../../components/GoogleSuggest';

import { ContentWrapper, Main, Button, Label } from '../../styled-components';

class CreateEvent extends React.Component {
  render() {
    return (
      <ContentWrapper centered>
        <Main size="60%">
          <Form onSubmit={submittedValues => this.props.createEvent(submittedValues)}>
            {formApi => (
              <form onSubmit={formApi.submitForm} id="form2">
                <ImageDrop
                  image={this.props.form.image}
                  setEventImage={file => this.props.setEventImage(file[0])}
                />
                <Label htmlFor="nameOfEvent">Name of the event</Label>
                <Text field="nameOfEvent" id="nameOfEvent" />
                <Label htmlFor="eventDescription">Bio</Label>
                <TextArea field="eventDescription" id="eventDescription" />
                <Label htmlFor="authorize" className="mr-2">Authorize</Label>
                <Checkbox field="authorize" id="authorize" className="d-inline-block" />
                <Button type="submit">Submit</Button>
              </form>
            )}
          </Form>
          <GoogleSuggest
            changeAddress={address => this.props.changeAddress(address)}
            onSuggestSelect={address => this.props.getMapForPosition(address.coordinate)}
            address={this.props.form.address}
          />
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
        </Main>
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
    setEventImage: (img) => {
      dispatch(setEventImage(img));
    },
    changeAddress: (address) => {
      dispatch(changeAddress(address));
    },
    getMapForPosition: (loc) => {
      dispatch(getMapForPosition(loc));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
