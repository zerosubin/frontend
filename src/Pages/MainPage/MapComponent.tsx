import React, { useEffect, useState } from 'react';
import { SC } from './styled'
import axios from 'axios';
declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  mapCenter: { lat: number; lon: number };
}

interface ItemData{
  titleInput: string;
  detailInput: string;
  payOption: string;
  pay: string;
  selectedImage: string[];
  hashTag: string[];
  id: number;
  day: string;
  location: number[];
}


const MapComponent: React.FC<MapProps> = ({ mapCenter }) => {
  const [apiData, setApiData] = useState<ItemData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/`);
        const apiData: ItemData[] = response.data;
        setApiData(apiData);
      } catch (error) {
        console.error('데이터 불러오기 실패:', error);
      }
    };

    fetchData();

    if (mapCenter && apiData.length > 0) {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new window.kakao.maps.LatLng(mapCenter.lat, mapCenter.lon),
        level: 3,
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      apiData.forEach((item) => {
        const lat = item.location[0];
        const lon = item.location[1];
        const locPosition = new window.kakao.maps.LatLng(lat, lon);
        const message = '<div style="padding:5px;">여기에 계신가요?!</div>';

        const marker = new window.kakao.maps.Marker({
          map: map,
          position: locPosition,
        });

        const infowindow = new window.kakao.maps.InfoWindow({
          content: message,
          removable: true,
        });

        infowindow.open(map, marker);
      });
    }
  }, [mapCenter]);

  return <SC.MapContainer id="map" />;
};

export default MapComponent;