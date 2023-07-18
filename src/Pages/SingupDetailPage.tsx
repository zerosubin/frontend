import axios from 'axios';
import { useState, useCallback, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { REST_API_KEY, REDIRECT_URI } from '../kakaoLoginData';

declare global {
  interface Window {
    kakao: any;
  }
}

const SingupDetailPage: React.FC = () => {
  // 닉네임
  const [nickName, setNickname] = useState<string>('');
  const [nicknameAlert, setNicknameAlert] = useState<string>('');
  const [isNickName, setIsNickname] = useState<boolean>(false);

  // 전화번호
  const [phonenumber, setphonenumber] = useState<string>('');
  const [phonenumberAlert, setphonenumberAlert] = useState<string>('');
  const [isphoneNumber, setIsphoneNumber] = useState<boolean>(false);

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

  //전화번호
  const onCheckingPhoneNumber = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const phonenumberRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    const phonenumberCurrent = e.target.value;
    setphonenumber(phonenumberCurrent);

    if (!phonenumberRegex.test(phonenumberCurrent)) {
      setphonenumberAlert('-를 포함하여 작성해주세요.');
      setIsphoneNumber(false);
    } else {
      setphonenumberAlert('올바른 전화번호 형식입니다.');
      setIsphoneNumber(true);
    }
  }, [])

  useEffect(() => {
    const mapContainer = document.getElementById('map'); // 지도를 표시할 div
    const mapOption = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 5, // 지도의 확대 레벨
    };

    const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude; // 위도
        const lon = position.coords.longitude; // 경도

        const locPosition = new window.kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
        const message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다

        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을 때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      const locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
      const message = 'geolocation을 사용할 수 없어요..';

      // 마커와 인포윈도우를 표시합니다
      displayMarker(locPosition, message);
    }

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition: any, message: string) {
      // 마커를 생성합니다
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: locPosition,
      });

      const iwContent = message; // 인포윈도우에 표시할 내용
      const iwRemoveable = true;

      // 인포윈도우를 생성합니다
      const infowindow = new window.kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });

      // 인포윈도우를 마커위에 표시합니다
      infowindow.open(map, marker);

      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);
    }
  }, []);


  // 카카오 로그인 사용자의 정보를 얻음
  const [kakaoToken, setKakaoToken] = useState<any>(null)
  const [kakaoUserDoc, setKakaoUserDoc] = useState<any>(null)

  const params = new URL(document.location.toString()).searchParams
  const code = params.get('code')

  const getToken = async (code: string) => {
    const grant_type = 'authorization_code'
    const client_id = `${REST_API_KEY}`

    const res = await axios.post(
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${code}`,
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      },
    )

    const token = res.data.access_token
    setKakaoToken(token)
  }

  const getKaKaoUserData = async (kakaoToken: any) => {
    const kakaoUser = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
      headers: {
        Authorization: `Bearer ${kakaoToken}`,
      },
    })
    setKakaoUserDoc(kakaoUser.data)
    return await kakaoUser.data
  }

  useEffect(() => {
    if (code) {
      getToken(code)
    }
  }, [code])

  useEffect(() => {
    if (kakaoToken) {
      getKaKaoUserData(kakaoToken)
    }
  }, [kakaoToken])
  

  // 카카오 로그인해서 넘어온 사람의 이메일을 가지고 
  // 닉네임, 전화번호, 지도 위치 추가로 저장
  console.log(kakaoUserDoc) // 카카오 로그인한 사용자 정보

  // 여기서 세션 스토리지에 저장해서 로그인 유지시켜서 헤더 로그인버튼 변경
  // const kakouserID = kakaoUserDoc.kakao_account.email
  // sessionStorage.setItem('user', `${kakouserID}`)

  const navigate = useNavigate()
  const setingUser = () => {
    // 닉네임, 전화번호 입력했는지? 
    // 지도 위치 받아야 함
    // 닉네임, 전화번호,지도 위치 -> db에 저장
    if(isNickName === true && isphoneNumber === true) {
      // 모달창 변경
      alert('회원가입에 성공하셨습니다. 로그인을 해주세요.')
      navigate('/')
    } else {
      alert('정보를 입력해주세요.')
    }
  }



  return (
    <Container>
      <InputBox>
        <Title>세부정보 등록</Title>

        <Box className="textcolor">
          <EmailInputBox>
            <EmailInput placeholder='닉네임' type="text"
              onChange={onCheckingNickname}/>
            <EmailCheckBtn>중복검사</EmailCheckBtn> 
          </EmailInputBox>
          {nickName.length > 0 && 
            <Alertment className={`message ${isNickName ? 'success' : 'error'}`}>{nicknameAlert}</Alertment>
          }
        </Box>

        <Box className="textcolor">
          <PhonenumberInput placeholder='전화번호' type="text"
            onChange={onCheckingPhoneNumber}/>
          {phonenumber.length > 0 && 
            <Alertment className={`message ${isphoneNumber ? 'success' : 'error'}`}>{phonenumberAlert}</Alertment>
          }
        </Box>

        <MapBox>
          <Map id="map" style={{ width: '80%', height: '250px' }} />
        </MapBox>
        
        {/* 닉네임, 전화번호, 위치 User DB 에 저장 
          메인페이지로 가는 임시 버튼 */}
        <UserLastBtn onClick={setingUser}>현재 위치로 등록</UserLastBtn>


      </InputBox>
    </Container>
  )
}

const Container = styled.section`
  margin: 80px 22px;
`
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h1`
  font-weight: 700;
  font-size: 22px;
  margin: 12px 0;
`

const Box = styled.div`
  width: 85%;
  display: flex;
  align-items: baseline;
  flex-direction: column;
  .message {
    &.success {
      color: #0500ff;
    }
    &.error {
      color: #ff2727;
    }
  }
`

const EmailInputBox = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
`
const EmailInput = styled.input`
  width: 70%;
  margin: 6px 0;
  padding: 8px;
  border-radius: 12px;
  border: 0;

  background-color: #F5F5F5;

  outline: none;
`

const Alertment = styled.span`
  font-size: 12px;
  padding-left: 8px;
`

const EmailCheckBtn = styled.button`
  margin-left: 8px;
  padding: 10px;
  border-radius: 8px;
  border: 0;

  background-color: #0089B5;
  color: #fff;
  
  font-size: 12px;
  font-weight: 500;
`

const PhonenumberInput = styled.input`
  width: 95%;
  margin: 6px 0;
  padding: 8px;
  border-radius: 12px;
  border: 0;

  background-color: #F5F5F5;

  outline: none;
`

const MapBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 15px 0;
  background-color: white;

  display: flex;
  justify-content: center;
`
const Map = styled.div``

const UserLastBtn = styled.button`
  width: 85%;
  margin: 0 auto;
  padding: 10px;
  border-radius: 6px;
  border: 0;

  background-color: #0089B5;
  color: #fff;

  font-size: 16px;
  font-weight: 700;

  cursor: pointer;
`

export default SingupDetailPage;


