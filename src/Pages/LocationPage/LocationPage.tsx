import { useState, useEffect } from "react";
import { SC } from './styled'
import DaumPostcode from "react-daum-postcode";
import Geocode from "react-geocode";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { instanceHeader } from "../API/axiosAPI";

export default function LocationPage() {
  const navigate = useNavigate()
  const [visible, setVisible] = useState<boolean>(false)
  // 도로명 주소
  const [userLocation, setUserLocation] = useState<any>('도로명 주소를 검색하세요')

  const onCompletePost = (data: { address: any; }) => {
    console.log(data.address)
    setUserLocation(data.address)
    setVisible(false)
  }

  const addressStyle = {
    height: "100%",
  }

  // 위도, 경도
  const [nowlat, setNowlat] = useState<number>()
  const [nowlng, setNowlng] = useState<number>()

  const GOOGLE_GEOCODING_API_KEY = process.env.VITE_GOOGLE_GEOCODING_API_KEY


  if(typeof GOOGLE_GEOCODING_API_KEY === 'string'){
    Geocode.setApiKey(GOOGLE_GEOCODING_API_KEY)
    Geocode.setLanguage('ko')
    Geocode.setRegion('kr')
    Geocode.enableDebug()
  }

  const changeAddress = async (currentAddr: string) => {
    return Geocode.fromAddress(currentAddr)
      .then( response => {
        const { lat, lng } = response.results[0].geometry.location
        setNowlat(lat)
        setNowlng(lng)
        return {lat, lng}
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if(userLocation) {
      changeAddress(userLocation)
    }
  }, [userLocation])

  const onAddress = () => {
    try {
      instanceHeader({
        url: 'users/address',
        method: 'put',
        data: {
          streetNameAddress : userLocation,
          latitude : nowlat,
          longitude : nowlng
        }
      })
      .then(() => {
        alert('현재 위치로 설정되었습니다.')
        navigate('/mypage')
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <SC.Container>
      <SC.BackBtn onClick={() => history.back()}>
        <BiArrowBack size={24} />
      </SC.BackBtn>
      <SC.Title>현재 위치로 재등록</SC.Title>


      <SC.LocationBox>
          {
            visible &&
            <SC.PostBox>
              <DaumPostcode
                onComplete={onCompletePost}
                style={addressStyle}
              />
            </SC.PostBox>
          }
          <SC.LocationMent>{userLocation}</SC.LocationMent>
          <SC.LocationBtn onClick={() => {
            setVisible(true)}}>도로명 주소 검색</SC.LocationBtn>
      </SC.LocationBox>


      <SC.UserLastBtn onClick={onAddress}>등록하기</SC.UserLastBtn>
    </SC.Container>
  )
}
