import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class GoogleSuggest extends React.Component {
  render() {
    const inputProps = {
      value: this.props.address,
      onChange: value => this.props.changeAddress(value),
      placeholder: 'Search for a street or place',
    };

    return (
      <div>
        <PlacesAutocomplete
          inputProps={inputProps}
          onSelect={
            () => geocodeByAddress(this.props.address)
              .then(results => getLatLng(results[0]))
              .then(latLng => this.props.onSuggestSelect(latLng))
          }
        />
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default GoogleSuggest;
