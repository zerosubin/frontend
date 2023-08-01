import { useState, useEffect } from "react";
import { SC } from './styled'
import DaumPostcode from "react-daum-postcode";
import Geocode from "react-geocode";
import { BiArrowBack } from "react-icons/bi";

export default function LocationPage() {
  const [visible, setVisible] = useState<boolean>(false)

  // 도로명 주소
  const [userLocation, setUserLocation] = useState<string>('버튼을 눌러 주소를 설정해주세요!')

  const onCompletePost = (data: { address: any; }) => {
    // 주소
    console.log(data.address)
    setUserLocation(data.address)
    setVisible(false)
  }

  const addressStyle = {
    height: "100%",
  }


  // 위도
  const [nowlat, setNowlat] = useState<number>()
  // 경도
  const [nowlng, setNowlng] = useState<number>()


  const GOOGLE_GEOCODING_API_KEY = import.meta.env.VITE_GOOGLE_GEOCODING_API_KEY

  Geocode.setApiKey(GOOGLE_GEOCODING_API_KEY)
  Geocode.setLanguage('ko')
  Geocode.setRegion('kr')
  Geocode.enableDebug()

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

  // 위도, 경도
  console.log(nowlat, nowlng)

  const setingLocation = () => {
    // 닉네임, 도로명 + 위도경도 -> db에 저장
    if(nowlat && nowlng) {
      // 모달창 변경
      alert('위치가 설정되었습니다.')
      window.location.href = '/mypage'
    } else {
      alert('위치를 입력해주세요')
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
      <SC.UserLastBtn onClick={setingLocation}>등록하기</SC.UserLastBtn>
    </SC.Container>
  )
}
