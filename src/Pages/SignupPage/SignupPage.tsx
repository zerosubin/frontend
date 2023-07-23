import { useCallback, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { Container, InputBox, SignupTitle, SignupBtn, Box, EmailInputBox, EmailInput, EmailCheckBtn, Alertment, PwInput, PwCheckInput } from './styled'

export default function SignupPage() {
  // 입력한 이메일, 비밀번호
  const [signupEmail, setsignupEmail] = useState<string>('');
  const [signupPw, setsignupPw] = useState<string>('');
  const [signupPwcheck, setsignupPwcheck] = useState<string>('');

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
    setsignupEmail(emailCurrent);

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
    setsignupPw(passwordCurrent);

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
      setsignupPwcheck(passwordConfirmCurrent);

      if (signupPw === passwordConfirmCurrent) {
        setpasswordCheckingAlert('비밀번호가 맞습니다. 회원가입 버튼을 눌러주세요.');
        setIsPasswordConfirm(true);
      } else {
        setpasswordCheckingAlert('비밀번호가 다릅니다.');
        setIsPasswordConfirm(false);
      }
    },
    [signupPw]
  )

  const navigate = useNavigate()

  const ClicksignupBtn = () => {
    // 이메일, 비밀번호 창 다 채우고, 중복검사도 끝내면 창 이동하기
    if((isEmail === true) && (isPassword === true) && (isPasswordConfirm === true) && (signupPw === signupPwcheck)) {
      //모달창으로 만들기
      alert('회원가입에 성공하셨습니다. 세부 정보를 등록해주세요!');
      navigate('/signup/detail')
    }
  }

  return (
    <Container>
      <InputBox>
        <SignupTitle>회원가입</SignupTitle>

        <Box className="textcolor">
          <EmailInputBox>
            <EmailInput placeholder='이메일' type="text"
              onChange={onCheckingEmail}/>
            <EmailCheckBtn>중복검사</EmailCheckBtn> 
          </EmailInputBox>
          {signupEmail.length > 0 && 
            <Alertment className={`message ${isEmail ? 'success' : 'error'}`}>{emailAlert}</Alertment>
          }
        </Box>

        <Box className="textcolor">
          <PwInput placeholder='비밀번호'
            onChange={onCheckingPassword}
            type="password" />
          {signupPw.length > 0 && (
            <Alertment className={`message ${isPassword ? 'success' : 'error'}`}>{passwordAlert}</Alertment>
          )}
        </Box>

        <Box className="textcolor">
          <PwCheckInput placeholder='비밀번호 확인'
            onChange={onCheckingPwAgain}
            type="password" />
          {signupPwcheck.length > 0 && (
            <Alertment className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordCheckingAlert}</Alertment>
          )}
        </Box>

        {/* 임시 버튼 - 이메일 DB 저장, 회원가입 
         signupDetail페이지로 넘어가기.)*/}
        <SignupBtn type="submit" disabled={!(signupEmail && signupPw && signupPwcheck)}
          onClick={ClicksignupBtn}>
          회원가입
        </SignupBtn>


      </InputBox>
    </Container>
  )
}

