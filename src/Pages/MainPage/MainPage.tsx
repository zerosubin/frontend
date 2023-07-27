import React from 'react';
import MapComponent from './MapComponent';
import { SC } from './styled';

const MainPage: React.FC = () => {
  return (
    <SC.MapBox>
      <MapComponent mapCenter={{ lat: 33.450701, lon: 126.570667 }} />
    </SC.MapBox>
  );
};

export default MainPage;
