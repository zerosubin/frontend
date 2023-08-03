import { useState, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SC } from './styled'
import { instanceHeader } from '../API/axiosAPI'
import { BiArrowBack } from 'react-icons/bi'

export default function MyPageEditPage() {
  // 닉네임 수정한 결과
  const [editNicKname, setEditNickname] = useState<string>('')

  const location = useLocation()
  const userDosc = location.state.user
  const navigate = useNavigate()

  const onEidtnickname = () => {
    try {
      // 닉네임
      instanceHeader({
        url: 'users/nickname',
        method: 'put',
        data: {
          nickname : editNicKname,
        }
      })
      .then(() => {
        navigate('/mypage')
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  // 프로필 이미지 src
  // db 연결되면 기본값에 원래 프로필 이미지 받아오기
  const [Image, setImage] = useState<any>(userDosc.profileImage ? userDosc.profileImage : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
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
    <SC.Container>
      <SC.BackBtn onClick={() => history.back()}>
        <BiArrowBack size={24} />
      </SC.BackBtn>
      <SC.Title>프로필 수정</SC.Title>
      <SC.ImgBox>
        <SC.Proimg 
          src={Image} 
          onClick={() => fileInput.current?.click()} />
        <input 
 	        type='file' 
          style={{ display:'none' }}
          accept='image/jpg,impge/png,image/jpeg' 
          name='profile_img'
          onChange={onChange}
          ref={fileInput} />
      </SC.ImgBox>
        <SC.DeleteimgBtn onClick={proImgDelete}>프로필 이미지 삭제하기</SC.DeleteimgBtn>

      <SC.InputBox>
        {/* onClick -> editNicKname를 새로운 유저 닉네임으로 저장 */}
        {/* defaultValue={editNicKname} */}
        <SC.NicknameInput defaultValue={userDosc.nickname || ''}           
          onChange={(e) => {
              setEditNickname(e.target.value)
        }}/>
        <SC.AlertMent>이메일은 수정할 수 없습니다</SC.AlertMent>
        {/* value에 유저 정보 넣어주기 */}
        <SC.Input value={userDosc.email} disabled/>
      </SC.InputBox>
      <SC.TotalEditBtn onClick={onEidtnickname}>수정하기</SC.TotalEditBtn>
    </SC.Container>
  )
}
