import { useCallback, useState } from "react"
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';

export default function SingupPage() {
  // 입력한 이메일, 비밀번호
  const [singupEmail, setSingupEmail] = useState<string>('');
  const [singupPw, setsingupPw] = useState<string>('');
  const [singupPwcheck, setsingupPwcheck] = useState<string>('');

  // 주의사항 문구
  const [emailAlert, setemailAlert] = useState<string>('');
  const [passwordAlert, setpasswordAlert] = useState<string>('');
  const [passwordCheckingAlert, setpasswordCheckingAlert] = useState<string>('');

  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);

  // 이메일 형식
  const onCheckingEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setSingupEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setemailAlert('이메일 형식이 아닙니다.');
      setIsEmail(false);
    } else {
      setemailAlert('올바른 이메일 형식입니다.');
      setIsEmail(true);
    }
  }, [])

  // 비밀번호 형식
  const onCheckingPassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,25}$/;
    const passwordCurrent = e.target.value;
    setsingupPw(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setpasswordAlert('영문, 숫자, 특수문자 포함 6자리 이상의 비밀번호를 입력하세요.');
      setIsPassword(false);
    } else {
      setpasswordAlert('올바른 비밀번호 형식입니다.');
      setIsPassword(true);
    }
  }, [])  

  // 비밀번호 확인
  const onCheckingPwAgain = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordConfirmCurrent = e.target.value;
      setsingupPwcheck(passwordConfirmCurrent);

      if (singupPw === passwordConfirmCurrent) {
        setpasswordCheckingAlert('비밀번호가 맞습니다. 회원가입 버튼을 눌러주세요.');
        setIsPasswordConfirm(true);
      } else {
        setpasswordCheckingAlert('비밀번호가 다릅니다.');
        setIsPasswordConfirm(false);
      }
    },
    [singupPw]
  )

  const navigate = useNavigate()

  const ClicksingupBtn = () => {
    // 이메일, 비밀번호 창 다 채우고, 중복검사도 끝내면 창 이동하기
    if((isEmail === true) && (isPassword === true) && (isPasswordConfirm === true) && (singupPw === singupPwcheck)) {
      //모달창으로 만들기
      alert('회원가입에 성공하셨습니다. 세부 정보를 등록해주세요!');
      navigate('/singup/detail')
    }
  }

  return (
    <Container>
      <InputBox>
        <SingupTitle>회원가입</SingupTitle>

        <Box className="textcolor">
          <EmailInputBox>
            <EmailInput placeholder='이메일' type="text"
              onChange={onCheckingEmail}/>
            <EmailCheckBtn>중복검사</EmailCheckBtn> 
          </EmailInputBox>
          {singupEmail.length > 0 && 
            <Alertment className={`message ${isEmail ? 'success' : 'error'}`}>{emailAlert}</Alertment>
          }
        </Box>

        <Box className="textcolor">
          <PwInput placeholder='비밀번호'
            onChange={onCheckingPassword}
            type="password" />
          {singupPw.length > 0 && (
            <Alertment className={`message ${isPassword ? 'success' : 'error'}`}>{passwordAlert}</Alertment>
          )}
        </Box>

        <Box className="textcolor">
          <PwCheckInput placeholder='비밀번호 확인'
            onChange={onCheckingPwAgain}
            type="password" />
          {singupPwcheck.length > 0 && (
            <Alertment className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordCheckingAlert}</Alertment>
          )}
        </Box>

        {/* 임시 버튼 - 이메일 DB 저장, 회원가입 
         SingupDetail페이지로 넘어가기.)*/}
        <SingupBtn type="submit" disabled={!(singupEmail && singupPw && singupPwcheck)}
          onClick={ClicksingupBtn}>
          회원가입
        </SingupBtn>


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
const SingupTitle = styled.h1`
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
const SingupBtn = styled.button`
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
