import React from 'react';
import GoogleMapReact from 'google-map-react';

import { MapStyles } from './styles';

const GatrMap = ({ center, zoom }) => (
  <div style={{width: '100%', height: '100%'}}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyB37P5EV180Bj28TMtIYBRQjfeiiuHpI1c' }}
      options={{
        styles: MapStyles
      }}
      center={center}
      defaultZoom={zoom} />
  </div>
);

export default GatrMap;
