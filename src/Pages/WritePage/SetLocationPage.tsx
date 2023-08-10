import { useEffect } from 'react'


const SetLocationPage = () => {
    useEffect(() => {

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
        
        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new window.kakao.maps.Map(mapContainer, mapOption); 
        window.kakao.maps.event.addListener(map, 'center_changed', function() {

            // 지도의  레벨을 얻어옵니다
            var level = map.getLevel();
        
            // 지도의 중심좌표를 얻어옵니다 
            var latlng = map.getCenter(); 
        
            var message = '<p>지도 레벨은 ' + level + ' 이고</p>';
            message += '<p>중심 좌표는 위도 ' + latlng.getLat() + ', 경도 ' + latlng.getLng() + '입니다</p>';
            console.log(message)
        
        });
    },[])
        
    
    return <div id="map" style={{ width: '80%', height: '70%'}}></div>
}



export default SetLocationPage