import { styled } from "styled-components"

const Container = styled.section`
  margin: 80px 22px;
`
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SignupTitle = styled.h1`
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
const EmailInputBox = styled.form`
  display: flex;
  align-items: baseline;
  width: 100%;
`
const EmailInput = styled.input`
  width: 100%;
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

  cursor: pointer;
`
const PwInput = styled.input`
  width: 95%;
  margin: 6px 0;
  padding: 8px;
  border-radius: 12px;
  border: 0;

  background-color: #F5F5F5;

  outline: none;
`
const PwCheckInput = styled.input`
  width: 95%;
  margin: 6px 0;
  padding: 8px;
  border-radius: 12px;
  border: 0;

  background-color: #F5F5F5;

  outline: none;
`
const SignupBtn = styled.button`
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

export const SC = { Container, InputBox, SignupTitle, SignupBtn, Box, EmailInputBox, EmailInput, EmailCheckBtn, Alertment, PwInput, PwCheckInput }