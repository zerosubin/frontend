import { useEffect, useState } from 'react'
import MapComponent from './MapComponent';
import { SC } from './styled';
import { instanceHeader, instance } from '../API/axiosAPI';
import { useRecoilState } from 'recoil';
import { mapCenterState, nicknameState } from '../../recoil/atoms';


const MainPage: React.FC = () => {
  const [mapCenter, setMapCenter] = useRecoilState<{lat: number, lon: number} | null>(mapCenterState);
  const [nickname, setNickname] = useRecoilState<any>(nicknameState)
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const code = new URL(window.location.href).searchParams.get("code")


  useEffect(() => {
    if(code) {
      try {
        instance({
          url: `auth/kakao/callback?code=${code}`,
          method: 'get',
        })
        .then((res: any) => {
          setNickname(res.nickname)
          setIsLogin(true)
        })
      } catch (error: any) {
        console.log(error)
      }
    }
  }, [code])

  const logintoken = sessionStorage.getItem('user')
  const getUser = () => {
    if(logintoken) {
      try {
        instanceHeader({
          url: 'users/',
          method: 'get',
        }).then((res: any) => {
        setIsLogin(true)
        setNickname(res.nickname)}
        )
      } catch (error: any) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    getUser()
  }, [])
  
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

    console.log(nickname);
    if(mapCenter){
      return (
        <SC.MapBox>
          {isLogin ? 
          <MapComponent mapCenter={ mapCenter } />
          : <div>의뢰 지도를 보려면 로그인을 해주세요</div>
        }
        </SC.MapBox>
      );
    }
};

export default MainPage;
