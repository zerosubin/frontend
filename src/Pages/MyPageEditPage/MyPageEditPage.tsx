import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Title, ImgBox, ImgInput, Div, InputBox, NicknameInput, AlertMent, Input, TotalEditBtn} from './styled'

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

