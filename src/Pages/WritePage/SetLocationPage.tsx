import { useEffect, useState } from 'react'
import { SetLocation } from './SetLocation'






export const SetLocationPage = () => {
    const [ mapCenter, setMapCenter ] = useState<{lat: number, lon: number}>({lat: 0, lon: 0})
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
        <section style={{position:'relative', width: '100%', height: '80%', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
          <SetLocation mapCenter={ mapCenter } />
        </section>
      );
    }
    }