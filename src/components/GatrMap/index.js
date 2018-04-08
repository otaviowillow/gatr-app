import React from 'react';
import GoogleMapReact from 'google-map-react';

import { MapStyles } from './styles';

const GatrMap = ({ center, zoom, children, noControls, onChange }) => (
  <div style={{width: '100%', height: '100%'}}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyB37P5EV180Bj28TMtIYBRQjfeiiuHpI1c' }}
      onChange={onChange}
      center={center}
      defaultZoom={zoom}
      options={{
        draggable: !noControls ? true : false,
        panControl: !noControls ? true : false,
        mapTypeControl: !noControls ? true : false,
        scrollwheel: !noControls ? true : false,
        zoomControl: !noControls ? true : false,
        styles: MapStyles
      }}>
      {children}
    </GoogleMapReact>
  </div>
);

export default GatrMap;
