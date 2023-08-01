import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { SC } from './styled'
import axios from 'axios'

export default function MyPageEditPage() {
  const [editNicKname, setEditNickname] = useState<string>('')
  // 현재 로그인한 유저의 닉네임 넣어주기
  // setEditNickname()

  // 닉네임 가져오기
  const [user, setUser] = useState<any>('') 
  
  const Users = async () => {
    const user = await axios.get('http://localhost:3000/users/1')
    return user.data
  }

  useEffect(() => {
    (async () => {
      const userAPI = await Users()
      setUser(userAPI)
    })()
  }, [])

  // 현재 카카오 로그인한 유저의 이메일
  // const LoginUser = sessionStorage.getItem('user')  
  // // 카카오 로그인한 사람이라면 setEditEmail에 카카오 이메일 넣어줌
  // useEffect(() => {
  //   if (LoginUser) {
  //     setEditEmail(LoginUser)
  //   }
  // }, [LoginUser])


  const navigate = useNavigate()
  // 수정한 닉네임 저장하고 마이페이지로 이동
  const EidtUser = () => {
    axios.patch('http://localhost:3000/users/1', {
      nickname: editNicKname
    })
    .then(()=> {
      navigate('/mypage')
    })
    .catch((error: any) => {
        console.log(error)
    })
  }

  // 프로필 이미지 src
  // db 연결되면 기본값에 원래 프로필 이미지 받아오기
  const [Image, setImage] = useState<any>('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
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
        <SC.NicknameInput defaultValue={user.nickname || ''}
          onChange={(e) => {
            setEditNickname(e.target.value)
        }}/>
        <SC.AlertMent>이메일은 수정할 수 없습니다</SC.AlertMent>
        {/* value에 유저 정보 넣어주기 */}
        <SC.Input value={user.email} disabled/>
      </SC.InputBox>
      <SC.TotalEditBtn onClick={EidtUser}>수정하기</SC.TotalEditBtn>
    </SC.Container>
  )
}
