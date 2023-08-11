import { useState, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import * as SC from './styled'
import { instanceHeader } from '../API/axiosAPI'
import { BiArrowBack } from 'react-icons/bi'

export default function MyPageEditPage() {
  const [editNicKname, setEditNickname] = useState<string>('')
  const location = useLocation()
  const userDosc = location.state.user
  const navigate = useNavigate()
  const [Image, setImage] = useState<any>(userDosc.profileImage ? userDosc.profileImage : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
  const fileInput = useRef<any>(null)
  const [postImg, setPostImg] = useState<any>()

  const onChange = (e: any) => {
    const reader: any = new FileReader()
    reader.onload = () => {
      if(reader.readyState === 2){
        setImage(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])

    if(e.target.files){
      const uploadFile = e.target.files[0]
      setPostImg(uploadFile)
    }
  }


  const onEdit = () => {
    if(editNicKname !== '') {
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

    // 프로필 이미지
    if(postImg !== userDosc.profileImage) {
      const formData = new FormData()
      formData.append('image', postImg)

      console.log(formData)

      try {
        instanceHeader({
          url: 'users/profileimg',
          method: 'put',
          data: formData,
          headers: { 
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res: any) => {
          console.log(res)
          navigate('/mypage')
        })
      } catch (error: any) {
        console.log(error)
      }
    }
  }

  return (
    <SC.Container>
      <SC.BackBtn onClick={() => history.back()}>
        <BiArrowBack size={24} />
      </SC.BackBtn>
      <SC.Title>프로필 수정</SC.Title>
      <SC.NoticeBox style={{ textAlign: 'center' }}>
        <SC.Notice>프로필 이미지</SC.Notice>
      </SC.NoticeBox>
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

      <SC.InputBox>
        <SC.NoticeBox>
          <SC.Notice>닉네임</SC.Notice>
        </SC.NoticeBox>
        <SC.NicknameInput defaultValue={userDosc.nickname || ''}           
          onChange={(e) => {
              setEditNickname(e.target.value)
        }}/>
        <SC.NoticeBox>
          <SC.Notice>이메일<SC.SmNotice>이메일 수정 불가능</SC.SmNotice></SC.Notice>
        </SC.NoticeBox>
        <SC.Input value={userDosc.email} disabled/>
      </SC.InputBox>
      <SC.TotalEditBtn onClick={onEdit}>수정하기</SC.TotalEditBtn>
    </SC.Container>
  )
}
