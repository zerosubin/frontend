import { useState } from 'react';
import { Link } from 'react-router-dom';
import { REDIRECT_URI, REST_API_KEY } from './kakao/kakaoLoginData';
import { Container, LoginTitle, EmailInput, PwInput, LoginBtn, KakaoLoginBtn, InputBox, DoscBox, FindIdPw, Signup} from './styled'

export default function LoginPage() {
  const [loginEmail, setLoginEmail] = useState<string>('')
  const [loginPw, setLoginPw] = useState<string>('')
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

  const KakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL
  }

  // 로그인 api 필요
  console.log(loginEmail, loginPw)

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

