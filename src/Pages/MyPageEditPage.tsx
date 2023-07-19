import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function MyPageEditPage() {
  const [editNicKname, setEditNickname] = useState<string>('')

  // 현재 로그인한 유저의 닉네임 넣어주기
  // setEditNickname()

  const navigate = useNavigate()
  // 수정한 닉네임 저장하고 마이페이지로 이동
  const EidtUser = () => {
    console.log(editNicKname)
    navigate('/mypage')
  }
  return (
    <Container>
      <Title>프로필 수정</Title>
      <ImgBox>
        {/* 업로드 이미지 보여주기 추가*/}
        <ImgInput type="file" id="fileUpload" />
        <Div></Div>
      </ImgBox>
      <InputBox>
        {/* onClick -> editNicKname를 새로운 유저 닉네임으로 저장 */}
        {/* defaultValue={editNicKname} */}
        <NicknameInput defaultValue='유저 닉네임'
          onChange={(e) => {
            setEditNickname(e.target.value)
        }}/>
        <AlertMent>이메일과 전화번호는 수정할 수 없습니다</AlertMent>
        {/* value에 유저 정보 넣어주기 */}
        <Input value='유저 이메일 주소' disabled/>
        <Input value='유저 전화번호' disabled/>
      </InputBox>
      <TotalEditBtn onClick={EidtUser}>수정하기</TotalEditBtn>
    </Container>
  )
}

const Container = styled.section`
  heigth: 100vh;
  margin: 60px 22px;

  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h3`
  font-weight: 700;
  font-size: 22px;
  margin: 22px 0;
`
const ImgBox = styled.div`
  position: relative;
  width: 55px;
  height: 55px;
  background-color: red;
  
  border-radius: 50%;
`
const ImgInput = styled.input`
  width: 45px;
  height: 50px;
  margin: 15px 5px;
  opacity: 0;
`
const Div = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  background-color: #F5F5F5;
`
const InputBox = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AlertMent = styled.span`
  font-size: 12px;
  margin-top: 12px;
`
const NicknameInput = styled.input`
  width: 80%;
  margin: 6px 0;
  padding: 8px;
  border-radius: 12px;
  border: 0;

  background-color: #F5F5F5;

  outline: none;
`

const Input = styled.input`
  width: 80%;
  margin: 6px 0;
  padding: 8px;
  border-radius: 12px;
  border: 0;
  background-color: #F5F5F5;
  font-family: var(--font-nanumfontB);
  outline: none;
`

const TotalEditBtn =  styled.button`
  width: 80%;
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