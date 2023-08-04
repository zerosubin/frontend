import { useEffect, useState } from 'react'
import MapComponent from './MapComponent';
import { SC } from './styled';

const MainPage: React.FC = () => {
  const [mapCenter, setMapCenter] = useState<{lat: number, lon: number} | null>(null);

  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (postion) => {
          const lat = postion.coords.latitude;
          const lon = postion.coords.longitude
          setMapCenter({lat, lon})
        }
        )
      }else{
        alert('위치 정보를 불러올 수 없습니다.')
      }
    }, [])

    if(mapCenter){
      return (
        <SC.MapBox>
          <MapComponent mapCenter={ mapCenter } />
        </SC.MapBox>
      );
    }
};

export default MainPage;
