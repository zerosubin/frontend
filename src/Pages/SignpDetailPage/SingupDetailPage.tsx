import axios from 'axios';
import { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { REST_API_KEY, REDIRECT_URI } from '../LoginPage/kakao/kakaoLoginData';
import { Container, InputBox, Title, Box, EmailInputBox, EmailInput, EmailCheckBtn, Alertment, PhonenumberInput, MapBox, UserLastBtn} from './styled'
import MapComponent from './MapComponent';

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

  // 카카오 로그인 사용자의 정보를 얻음
  const [kakaoToken, setKakaoToken] = useState<any>(null)
  const [kakaoUserDoc, setKakaoUserDoc] = useState<any>(null)

  const params = new URL(document.location.toString()).searchParams

  // code => 카카오 로그인 과정에서 인증 후에 발급된 인증 코드
  const code = params.get('code')

  // 전달받은 인증 코드를 사용하여 카카오 서버로부터 액세스 토큰을 요청함
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
    // token => 엑세스 토큰 
    setKakaoToken(token) 
    // kakaoToken => 액세스 토큰
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
      alert('회원가입에 성공하셨습니다.')
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
          <MapComponent mapCenter={{ lat: 33.450701, lon: 126.570667 }} />
        </MapBox>
        
        {/* 닉네임, 전화번호, 위치 User DB 에 저장 
          메인페이지로 가는 임시 버튼 */}
        <UserLastBtn onClick={setingUser}>현재 위치로 등록</UserLastBtn>
      </InputBox>
    </Container>
  )
}

export default SingupDetailPage;


