import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Title, ImgBox, InputBox, NicknameInput, AlertMent, Input, TotalEditBtn, Proimg, DeleteimgBtn} from './styled'

export default function MyPageEditPage() {
  const [editNicKname, setEditNickname] = useState<string>('')
  const [editEmail, setEditEmail] = useState<any>('')

  // 현재 로그인한 유저의 닉네임 넣어주기
  // setEditNickname()

  // 현재 카카오 로그인한 유저의 이메일
  const LoginUser = sessionStorage.getItem('user')  
  // 카카오 로그인한 사람이라면 setEditEmail에 카카오 이메일 넣어줌
  useEffect(() => {
    if (LoginUser) {
      setEditEmail(LoginUser)
    }
  }, [LoginUser])


  const navigate = useNavigate()
  // 수정한 닉네임 저장하고 마이페이지로 이동
  const EidtUser = () => {
    console.log(editNicKname)
    navigate('/mypage')
  }

  // 프로필 이미지 src
  // db 연결되면 기본값에 원래 프로필 이미지 받아오기
  const [Image, setImage] = useState<string>("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
  const fileInput = useRef<any>(null)

  const onChange = (e: any) => {
    const reader: any = new FileReader()
    reader.onload = () => {
      if(reader.readyState === 2){
        setImage(reader.result)
        console.log(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  const proImgDelete = () => {
    setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
  }

  return (
    <Container>
      <Title>프로필 수정</Title>
      <ImgBox>
        <Proimg 
          src={Image} 
          onClick={() => fileInput.current?.click()} />
        <input 
 	        type='file' 
          style={{ display:'none' }}
          accept='image/jpg,impge/png,image/jpeg' 
          name='profile_img'
          onChange={onChange}
          ref={fileInput} />
      </ImgBox>
        <DeleteimgBtn onClick={proImgDelete}>프로필 이미지 삭제하기</DeleteimgBtn>

      <InputBox>
        {/* onClick -> editNicKname를 새로운 유저 닉네임으로 저장 */}
        {/* defaultValue={editNicKname} */}
        <NicknameInput defaultValue='유저 닉네임'
          onChange={(e) => {
            setEditNickname(e.target.value)
        }}/>
        <AlertMent>이메일은 수정할 수 없습니다</AlertMent>
        {/* value에 유저 정보 넣어주기 */}
        <Input value={editEmail} disabled/>
      </InputBox>
      <TotalEditBtn onClick={EidtUser}>수정하기</TotalEditBtn>
    </Container>
  )
}
