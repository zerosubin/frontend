import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { REDIRECT_URI, REST_API_KEY } from '../kakaoLoginData';

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
          <KakaoLoginBtn src='src\assets\kakaobtnImg\kakao_login_large_wide.png' 
            onClick={KakaoLogin}/>
        </InputBox>
        <DoscBox>
          {/* 로그인 api 필요 */}
          <FindIdPw>이메일 찾기 / 비밀번호 찾기</FindIdPw>
          <Link to="/singup" style={{ textDecoration: "none", color: "#000"}}>
            <Singup>회원가입</Singup>
          </Link>
        </DoscBox>
      </Container>
    </>
  )
}

const Container = styled.section`
  heigth: 100vh;
  margin: 60px 22px;
`

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginTitle =  styled.h1`
  font-weight: 700;
  font-size: 22px;
  margin: 22px 0;
`
const EmailInput = styled.input`
  width: 80%;
  margin: 6px 0;
  padding: 8px;
  border-radius: 12px;
  border: 0;
  
  background-color: #F5F5F5;

  outline: none;
`
const PwInput = styled.input`
  width: 80%;
  margin: 6px 0;
  padding: 8px;
  border-radius: 12px;
  border: 0;

  background-color: #F5F5F5;

  outline: none;
`
const LoginBtn=  styled.button`
  width: 85%;
  margin: 6px 0;
  padding: 10px;
  border-radius: 6px;
  border: 0;

  background-color: #0089B5;
  color: #fff;

  font-size: 16px;
  font-weight: 700;

  cursor: pointer;
`
const KakaoLoginBtn = styled.img`
  width: 85%;
  max-height: 40px;
  cursor: pointer;
`
const DoscBox = styled.div`
  width: 95%;
  margin: 6px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const FindIdPw = styled.span`
  padding: 4px;
  font-size: 14px;

  cursor: pointer;
`
const Singup = styled.span`
  padding: 4px;
  font-size: 14px;
`
