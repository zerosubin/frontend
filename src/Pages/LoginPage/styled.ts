import { styled } from "styled-components"

const Container = styled.section`
  height: 100vh;
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
const Signup = styled.span`
  padding: 4px;
  font-size: 14px;
`

export const SC = { Container, LoginTitle, EmailInput, PwInput, LoginBtn, KakaoLoginBtn, InputBox, DoscBox, FindIdPw, Signup}