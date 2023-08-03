import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SC } from './styled'
import { instance } from '../API/axiosAPI';

export default function LoginPage() {
  const [loginEmail, setLoginEmail] = useState<string>('')
  const [loginPw, setLoginPw] = useState<string>('')

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_REST_API_KEY}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code`

  const KakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL
  }

  const Login = () => {
    try {
      instance({
        url: 'auth/signin',
        method: 'post',
        data: {
          email : loginEmail,
          password : loginPw
        }
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <>
      <SC.Container>
        <SC.InputBox>
          <SC.LoginTitle>로그인</SC.LoginTitle>
          <SC.EmailInput placeholder='이메일'
            type='text'
            onChange={(e) => {
              setLoginEmail(e.target.value)
            }}/>
          <SC.PwInput placeholder='비밀번호'
            type='password'
            onChange={(e) => {
              setLoginPw(e.target.value)
            }}/>
          <SC.LoginBtn onClick={Login}>로그인</SC.LoginBtn>
          <SC.KakaoLoginBtn src='https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_large_wide.png' 
            onClick={KakaoLogin}/>
        </SC.InputBox>
        <SC.DoscBox>
          {/* 로그인 api 필요 */}
          <SC.FindIdPw>이메일 찾기 / 비밀번호 찾기</SC.FindIdPw>
          <Link to="/signup" style={{ textDecoration: "none", color: "#000"}}>
            <SC.Signup>회원가입</SC.Signup>
          </Link>
        </SC.DoscBox>
      </SC.Container>
    </>
  )
}

