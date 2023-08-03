import { useState, useCallback, useEffect } from 'react'
import { SC } from './styled'
import DaumPostcode from "react-daum-postcode";
import Geocode from "react-geocode";
import { useNavigate } from 'react-router-dom';
import { instanceHeader } from '../API/axiosAPI';

const SignupDetailPage: React.FC = () => {
  const navigate = useNavigate()
  
  // 닉네임
  const [nickName, setNickname] = useState<string>('');
  const [nicknameAlert, setNicknameAlert] = useState<string>('');
  const [isNickName, setIsNickname] = useState<boolean>(false);

  //닉네임
  const onCheckingNickname = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const nicknameRegex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/;
    const nicknameCurrent = e.target.value;
    setNickname(nicknameCurrent);

    if (!nicknameRegex.test(nicknameCurrent)) {
      setNicknameAlert('최소 2글자 이상 적어주세요.');
      setIsNickname(false);
    } else {
      setNicknameAlert('올바른 닉네임입니다.');
      setIsNickname(true);
    }
  }, [])

  const [visible, setVisible] = useState<boolean>(false)
  const [userLocation, setUserLocation] = useState<string>('버튼을 눌러 주소를 설정해주세요!')

  const onCompletePost = (data: { address: any; }) => {
    console.log(data.address)
    setUserLocation(data.address)
    setVisible(false)
  }

  const addressStyle = {
    height: "100%",
  }

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

  // 닉네임, 주소 등록
  const onNicknameAddress = () => {
    try {
      // 닉네임
      instanceHeader({
        url: 'users/nickname',
        method: 'put',
        data: {
          nickname : nickName,
        }
      })
      // 주소
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
        alert('정보가 성공적으로 등록되었습니다.')
        navigate('/')
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <SC.Container>
      <SC.InputBox>
        <SC.Title>세부정보 등록</SC.Title>

        <SC.Box>
          <SC.NicknameInputBox>
            <SC.NicknameInput placeholder='닉네임' type="text"
              onChange={onCheckingNickname}/>
          </SC.NicknameInputBox>
          {nickName.length > 0 && 
            <SC.Alertment className={`message ${isNickName ? 'success' : 'error'}`}>{nicknameAlert}</SC.Alertment>
          }
        </SC.Box>

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
        
        {/* 닉네임, 위치 User DB 에 저장 
          메인페이지로 가는 임시 버튼 */}
        <SC.UserLastBtn onClick={onNicknameAddress}>현재 위치로 등록</SC.UserLastBtn>
      </SC.InputBox>
    </SC.Container>
  )
}

export default SignupDetailPage;


