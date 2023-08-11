import React, { useEffect, useState } from 'react';
import { SC } from './styled'
import axios from 'axios';
import { withinDistance } from './withinDistance';
import './CustomOverlay.css'
import { instanceHeader } from '../API/axiosAPI';

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  mapCenter: { lat: number; lon: number };
}

interface ItemData{
  title: string;
  content: string;
  payDivision: string;
  pay: string;
  images: string[];
  hashTag: string[];
  id: number;
  day: string;
  location: number[];
  nickname: string
}


const MapComponent: React.FC<MapProps> = ({ mapCenter }) => {
  const [apiData, setApiData] = useState<ItemData[]>([]);



  useEffect(() => {
    try{
      instanceHeader({
        url: 'errands',
        method: 'get',
    }).then((res: any) => {
      console.log(res);
      setApiData(res);
    })
    }catch (error: any){
      console.log(error)
    }
  }, []);

  if (mapCenter && apiData.length > 0) {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new window.kakao.maps.LatLng(mapCenter.lat, mapCenter.lon),
      level: 3,
    };
    const map = new window.kakao.maps.Map(mapContainer, mapOption);
    
    
    
    const positions = apiData.forEach((item: any) => {
      if(withinDistance(mapCenter.lat, mapCenter.lon, item.address.latitude, item.address.longitude)){
        // 마커 이미지의 이미지 주소입니다
        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
        var imageSize = new window.kakao.maps.Size(24, 35); 
        // 마커 이미지를 생성합니다    
        var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize); 
        
        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: new window.kakao.maps.LatLng(item.address.latitude, item.address.longitude), // 마커를 표시할 위치
          image : markerImage // 마커 이미지 
        });
        
        var content = `
        <div class="wrap">
          <a href="http://localhost:5173/errands/${item.id}" rel="noreferrer">
                <div class="info">  
                    <div class="title">  
                        ${item.title}  
                    </div>  
                    <div class="body">  
                        <div class="img"> 
                            <img src="https://my-neighbor-solver.s3.ap-northeast-2.amazonaws.com/${item.images[0]}" width="73" height="70"> 
                       </div>  
                        <div class="desc">  
                            <div class="ellipsis">${item.content}</div>  
                            <div class="jibun ellipsis">${item.payDivision}: ${item.pay}</div>
                        </div>
                    </div>  
                </div>
              </a>   
          </div>
        `;


        var overlay = new window.kakao.maps.CustomOverlay({
          content: content,
          map: map,
          clickable: true,
          position: marker.getPosition()       
        });
        overlay.setMap(null)

        window.kakao.maps.event.addListener(marker, 'click', function() {
          overlay.setMap(map)
        });

        window.kakao.maps.event.addListener(map, 'click', function() {
          overlay.setMap(null)
        });

      }
  })
  }
        
        
        
        return <SC.MapContainer id="map" /> ;
    }
  
export default MapComponent;