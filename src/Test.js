import React from 'react';
import { withScriptjs } from 'react-google-maps';
import { MapKey } from './config';
import Map from './TestMap.js';

const App = () => {
  const MapLoader = withScriptjs(Map);

  return (
    <MapLoader
      googleMapURL={"https://maps.googleapis.com/maps/api/js?key="+MapKey}
      loadingElement={<div style={{ height: `100%` }} />}
    />
  );
};

export default App