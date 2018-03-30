import React from 'react';
import GoogleMapReact from 'google-map-react';

import { MapStyles } from './styles';

const GatrMap = ({ center, zoom, children, onChange }) => (
  <div style={{width: '100%', height: '100%'}}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyB37P5EV180Bj28TMtIYBRQjfeiiuHpI1c' }}
      onChange={onChange}
      center={center}
      defaultZoom={zoom}
      options={{
        styles: MapStyles
      }}>
      {children}
    </GoogleMapReact>
  </div>
);

export default GatrMap;
