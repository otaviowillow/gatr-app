import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import { Autocomplete } from '../../styled-components';

class GoogleSuggest extends React.Component {
  render() {
    const inputProps = {
      value: this.props.address,
      onChange: value => this.props.changeAddress(value),
      placeholder: 'Search for a street or place',
    };

    const rrr = re => {
      console.log(re);
      return getLatLng(re[0]);
    };

    return (
      <Autocomplete>
        <PlacesAutocomplete
          inputProps={inputProps}
          onSelect={
            () => geocodeByAddress(this.props.address)
              .then(results => rrr(results))
              .then(latLng => this.props.onSuggestSelect(latLng))
          }
        />
      </Autocomplete>
    );
  }
}

export default GoogleSuggest;
