import { useState, useCallback } from 'react'
import { Container, InputBox, Title, Box, PostBox, Alertment, UserLastBtn, NicknameCheckBtn, NicknameInput, NicknameInputBox, LocationBtn, LocationMent, LocationBox} from './styled'
import DaumPostcode from "react-daum-postcode";

declare global {
  interface Window {
    kakao: any;
  }
}

const SignupDetailPage: React.FC = () => {
  // 닉네임
  const [nickName, setNickname] = useState<string>('');
  const [nicknameAlert, setNicknameAlert] = useState<string>('');
  const [isNickName, setIsNickname] = useState<boolean>(false);

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

  // 카카오 로그인해서 넘어온 사람의 이메일을 가지고 
  // 닉네임, 전화번호, 지도 위치 추가로 저장
  // console.log(kakaoUserDoc) // 카카오 로그인한 사용자 정보

  // 여기서 세션 스토리지에 저장해서 로그인 유지시켜서 헤더 로그인버튼 변경
  // const kakouserID = kakaoUserDoc.kakao_account.email
  // sessionStorage.setItem('user', `${kakouserID}`)

  const setingUser = () => {
    // 닉네임, 도로명 + 위도경도 -> db에 저장
    if(isNickName === true) {
      // 모달창 변경
      alert('회원가입에 성공하셨습니다.')
      window.location.href = '/'
    } else {
      alert('정보를 입력해주세요.')
    }
  }

  const [visible, setVisible] = useState<boolean>(false)
  // 도로명 주소
  const [userLocation, setUserLocation] = useState<string>('버튼을 눌러 주소를 설정해주세요!')

  const onCompletePost = (data: { address: any; }) => {
    // 주소
    console.log(data.address)
    setUserLocation(data.address)
    setVisible(false)
  }

  const addressStyle = {
    height: "100%",
  }


  return (
    <Container>
      <InputBox>
        <Title>세부정보 등록</Title>

        <Box className="textcolor">
          <NicknameInputBox>
            <NicknameInput placeholder='닉네임' type="text"
              onChange={onCheckingNickname}/>
            <NicknameCheckBtn>중복검사</NicknameCheckBtn> 
          </NicknameInputBox>
          {nickName.length > 0 && 
            <Alertment className={`message ${isNickName ? 'success' : 'error'}`}>{nicknameAlert}</Alertment>
          }
        </Box>

        <LocationBox>
          {
            visible &&
            <PostBox>
              <DaumPostcode
                onComplete={onCompletePost}
                style={addressStyle}
              />
            </PostBox>
          }
          <LocationMent>{userLocation}</LocationMent>
          <LocationBtn onClick={() => {
            setVisible(true)}}>도로명 주소 검색</LocationBtn>
        </LocationBox>

        {/* <MapBox>
          <MapComponent mapCenter={{ lat: 33.450701, lon: 126.570667 }} />
        </MapBox> */}
        
        {/* 닉네임, 위치 User DB 에 저장 
          메인페이지로 가는 임시 버튼 */}
        <UserLastBtn onClick={setingUser}>현재 위치로 등록</UserLastBtn>
      </InputBox>
    </Container>
  )
}

export default SignupDetailPage;


