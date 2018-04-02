import React from 'react';
import { connect } from 'react-redux';
import { Form, Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';

import { createEvent } from './actions';

import { ContentWrapper, Aside } from '../../styled-components';

class CreateEvent extends React.Component {
  render() {
    return (
      <ContentWrapper>
        <Aside size="60%">
          <p>asdsa</p>
          <Form onSubmit={submittedValues => this.props.createEvent(submittedValues)}>
            {formApi => (
              <form onSubmit={formApi.submitForm} id="form2">
                <label htmlFor="firstName">First name</label>
                <Text field="firstName" id="firstName" />
                <label htmlFor="lastName">Last name</label>
                <Text field="lastName" id="lastName" />
                <RadioGroup field="gender">
                  <label htmlFor="male" className="mr-2">Male</label>
                  <Radio value="male" id="male" className="mr-3 d-inline-block" />
                  <label htmlFor="female" className="mr-2">Female</label>
                  <Radio value="female" id="female" className="d-inline-block" />
                </RadioGroup>
                <label htmlFor="bio">Bio</label>
                <TextArea field="bio" id="bio" />
                <label htmlFor="authorize" className="mr-2">Authorize</label>
                <Checkbox field="authorize" id="authorize" className="d-inline-block" />
                <label htmlFor="status" className="d-block">Relationship status</label>
                <button type="submit" className="mb-4 btn btn-primary">
                  Submit
                </button>
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
    isFetching: state.event.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (form) => {
      dispatch(createEvent(form));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
