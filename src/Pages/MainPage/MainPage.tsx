import React, { useEffect } from 'react';
import MapComponent from './MapComponent';
import { SC } from './styled';
import { instanceHeader } from '../API/axiosAPI';

const MainPage: React.FC = () => {

  const getUser = () => {
    try {
      instanceHeader({
        url: 'users/',
        method: 'get',
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])
  

  return (
    <SC.MapBox>
      <MapComponent mapCenter={{ lat: 33.450701, lon: 126.570667 }} />
    </SC.MapBox>
  );
};

export default MainPage;
