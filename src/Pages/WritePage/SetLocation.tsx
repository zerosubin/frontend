import { useEffect, useState } from 'react'
interface MapProps {
    mapCenter: { lat: number; lon: number };
  }
  
export const SetLocation: React.FC<MapProps> = ({mapCenter}) => {
    // const [ id, setId] = useRecoilState<string>(idState);
    const [ location, setLocation ] = useState<string>('')


    useEffect(() => {
            var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = { 
                center: new window.kakao.maps.LatLng(mapCenter.lat, mapCenter.lon), // 지도의 중심좌표
                level: 1
            };
            var map = new window.kakao.maps.Map(mapContainer, mapOption); 
            var geocoder = new window.kakao.maps.services.Geocoder();
            
            window.kakao.maps.event.addListener(map, 'center_changed', function() {
                
                var latlng = map.getCenter(); 
                latlng.getLat();
                latlng.getLng();
            
                
                var coord = new window.kakao.maps.LatLng(latlng.getLat(), latlng.getLng());
                var callback = function(result:any, status:any) {
                    if (status === window.kakao.maps.services.Status.OK) {
                        setLocation(result[0].address.address_name);
                    }
                };
                geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
            });
        },[mapCenter])

       
        
    
    return (
        <section style={{position:'relative', width: '100%', height: '80%', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
            <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png" alt="marker" style={{position: 'absolute' ,zIndex: '10'}}/>
            <div id="map" style={{ width: '80%', height: '70%'}}></div>
            <span>{location !== '' ? `${location}` : ' '}</span>
            <span>위 장소로 의뢰장소를 지정합니다</span>
        </section>
        )

}
