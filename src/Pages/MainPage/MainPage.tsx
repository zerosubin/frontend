import React from 'react';
import MapComponent from './MapComponent';
import { MapBox } from './styled';

const MainPage: React.FC = () => {
  return (
    <MapBox>
      <MapComponent mapCenter={{ lat: 33.450701, lon: 126.570667 }} />
    </MapBox>
  );
};

export default MainPage;
