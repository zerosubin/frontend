import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, LoginTitle, EmailInput, PwInput, LoginBtn, KakaoLoginBtn, InputBox, DoscBox, FindIdPw, Signup} from './styled'
import axios from 'axios';

export default function LoginPage() {
  const [loginEmail, setLoginEmail] = useState<string>('')
  const [loginPw, setLoginPw] = useState<string>('')
  
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.REST_API_KEY}&redirect_uri=${import.meta.env.REDIRECT_URI}&response_type=code`

  const KakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL
  }

  // 일반 로그인 api 필요
  console.log(loginEmail, loginPw)

  // 카카오 user 목록
  const [kakaoUserlist, setKakaoUserlist] = useState<any>([])

  const getKakaoUserlist = async (SERVICE_APP_ADMIN_KEY:any) => {
      const kakaoUser = await axios.get(`https://kapi.kakao.com/v1/user/ids`, {
          headers: {
            Authorization: `KakaoAK ${SERVICE_APP_ADMIN_KEY}`,
          },
      })
      setKakaoUserlist(kakaoUser.data.elements)
  }
  
  useEffect(() => {
    if (import.meta.env.SERVICE_APP_ADMIN_KEY) {
      getKakaoUserlist(import.meta.env.SERVICE_APP_ADMIN_KEY)
    }
  }, [])

  // 카카오 소셜 user 목록
  console.log(kakaoUserlist)

  return (
    <>
      <Container>
        <InputBox>
          <LoginTitle>로그인</LoginTitle>
          <EmailInput placeholder='이메일'
            onChange={(e) => {
              setLoginEmail(e.target.value)
            }}/>
          <PwInput placeholder='비밀번호'
            onChange={(e) => {
              setLoginPw(e.target.value)
            }}/>
          <LoginBtn>로그인</LoginBtn>
          <KakaoLoginBtn src='https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_large_wide.png' 
            onClick={KakaoLogin}/>
        </InputBox>
        <DoscBox>
          {/* 로그인 api 필요 */}
          <FindIdPw>이메일 찾기 / 비밀번호 찾기</FindIdPw>
          <Link to="/signup" style={{ textDecoration: "none", color: "#000"}}>
            <Signup>회원가입</Signup>
          </Link>
        </DoscBox>
      </Container>
    </>
  )
}

