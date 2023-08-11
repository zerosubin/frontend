import { Link } from 'react-router-dom'
import * as SC from './styled'
import { useEffect, useState } from 'react'
import { instanceHeader } from '../API/axiosAPI'

export default function MyPage() {
  // user 가져오기
  const [user, setUser] = useState<any>('') 
  
  const getUser = () => {
    try {
      instanceHeader({
        url: 'users/',
        method: 'get',
      })
      .then((res) => {
        setUser(res)
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])
  
  const Logout = () => {
    sessionStorage.removeItem('user')
    window.location.href = '/'
  }

  const deleteUser = () => {
    try {
      instanceHeader({
        url: 'users/',
        method: 'delete',
      })
      .then((res) => {
        console.log(res)
        sessionStorage.removeItem('user')
        alert('탈퇴가 완료되었습니다.')
        window.location.href = '/'
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <SC.Container>
      <SC.Title>마이페이지</SC.Title>

      <SC.ProBox>
        <SC.ImgNameBox>
          <SC.ImgBox>
            <SC.Img src={user.profileImage ? user.profileImage : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} />
          </SC.ImgBox>
          <SC.NameBox>
            <SC.NameMent>{user.nickname}</SC.NameMent>
            <SC.LocationMent>{user.streetNameAddress ? user.streetNameAddress : '현재 주소를 설정해주세요'}</SC.LocationMent>
          </SC.NameBox>
        </SC.ImgNameBox>
      </SC.ProBox>

      <SC.UserDosBox>
        <SC.MannerBox>
          <SC.MannerTitle>매너등급</SC.MannerTitle>
          <SC.MannerNumberBox>
            <SC.BigMent>3</SC.BigMent>
            <SC.SmMent> / 5</SC.SmMent>
          </SC.MannerNumberBox>
        </SC.MannerBox>

        <SC.HashtagBox>
          <SC.MentBox>
            <SC.LikeTitle>나의 관심사 키워드</SC.LikeTitle>
            <Link to='/mypage/hashtag' style={{ textDecoration: "none", color: "#000"}}>
              <SC.LikeEditBtn>수정하기</SC.LikeEditBtn>
            </Link>
          </SC.MentBox>
          <SC.HashtagList>
            {
              Array.from({length : 5}).map((_, index) => {
                return (
                  <SC.Tagment key={index}>#산책</SC.Tagment>
                )
              })
            }
          </SC.HashtagList>
        </SC.HashtagBox>
        <SC.ListBox>
          <SC.ListTitle>관심글 목록</SC.ListTitle>
          <Link to='/mypage/likelist' style={{ textDecoration: "none", color: "#000"}}>
            <SC.ListBtn>→</SC.ListBtn>
          </Link>
        </SC.ListBox>

        <SC.ListBox>
          <SC.ListTitle>나의 평가 내역</SC.ListTitle>
          <Link to='/mypage/review' style={{ textDecoration: "none", color: "#000"}}>
            <SC.ListBtn>→</SC.ListBtn>
          </Link>
        </SC.ListBox>

      </SC.UserDosBox>
      <SC.LocationBtnBox>
        <Link to='/mypage/edit' style={{ textDecoration: "none", color: "#000"}} state={{ user : user }}>
          <SC.ProEditBtn>프로필 수정</SC.ProEditBtn>
        </Link>
        <Link to='/mypage/location'>
          <SC.LocationSetingBtn>현재 위치로 재등록하기</SC.LocationSetingBtn>
        </Link>
      </SC.LocationBtnBox>
      <SC.LogoutBox>
        <SC.LogoutButton onClick={Logout}>로그아웃</SC.LogoutButton>
      </SC.LogoutBox>
      <SC.BtnBox>
        <SC.UserleaveButton onClick={deleteUser}>탈퇴하기</SC.UserleaveButton>
      </SC.BtnBox>
    </SC.Container>
  )
}

