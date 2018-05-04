import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';

import { Autocomplete } from '../../styled-components';

class GoogleSuggest extends React.Component {
  render() {
    const inputProps = {
      value: this.props.address,
      onChange: value => this.props.changeAddress(value),
      placeholder: 'Search for a street or place',
    };

    const setEvent = result => {
      const allowedAddress = {
        street_number: { googleName: 'street_number', gatrName: 'number' },
        route: { googleName: 'route', gatrName: 'street' },
        neighborhood: { googleName: 'neighborhood', gatrName: 'neighborhood' },
        locality: { googleName: 'locality', gatrName: 'city' },
        country: { googleName: 'country', gatrName: 'country' },
      };
      const createEventObject = (eventName, componentName) => ({[eventName]: componentName});
      const filteredAddress = result[0].address_components.map(component => {
        return component.types.map(type => allowedAddress[type] && allowedAddress[type].googleName === type ? createEventObject(allowedAddress[type].gatrName, component.long_name) : []);
      });
      const reducedAddress = filteredAddress.reduce((prev, curr) => prev.concat(curr)); // Flatten arrays
      const onlyObjectsArray = reducedAddress.filter(detail => !Array.isArray(detail)); // Create an array of objects and no empty arrays
      const arrayAsObject = Object.assign({}, ...onlyObjectsArray); // MAke an object out of array
      return {
        ...arrayAsObject,
        coordinate: {
          lat: result[0].geometry.location.lat(),
          lng: result[0].geometry.location.lng(),
        }
      };
    };

    return (
      <Autocomplete>
        <PlacesAutocomplete
          inputProps={inputProps}
          onSelect={() => geocodeByAddress(this.props.address).then(results => setEvent(results)).then(latLng => this.props.onSuggestSelect(latLng))}
        />
      </Autocomplete>
    );
  }
}

export default GoogleSuggest;
