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
  }, []); // 빈 의존성 배열은 이 효과가 마운트될 때 한 번만 실행되도록 보장합니다


    if (mapCenter && apiData.length > 0) {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new window.kakao.maps.LatLng(mapCenter.lat, mapCenter.lon),
        level: 3,
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      

      const positions = apiData.forEach((item) => {
      // 마커 이미지의 이미지 주소입니다
      var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
      var imageSize = new window.kakao.maps.Size(24, 35); 
      // 마커 이미지를 생성합니다    
      var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize); 
      
      // 마커를 생성합니다
      var marker = new window.kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: new window.kakao.maps.LatLng(item.location[0], item.location[1]), // 마커를 표시할 위치
          image : markerImage // 마커 이미지 
      });
    })}
        
        
        
        return <SC.MapContainer id="map" />;
    }
  
export default MapComponent;