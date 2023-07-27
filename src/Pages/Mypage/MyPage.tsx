import { Link, useNavigate } from 'react-router-dom'
import { SC } from './styled'
import axios from 'axios'

export default function MyPage() {
  const navigate = useNavigate()

  // 로그인한 사용자의 엑세스 토큰
  const Token = sessionStorage.getItem('kakao-token')
  console.log(Token)

  // 카카오 로그아웃
  const kakaoLogout = () => {
    axios({
      method: 'POST',
      url: 'https://kapi.kakao.com/v1/user/logout',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${Token}`
      },
    }).then(() => {
      console.log('로그아웃 성공')

      // 로그아웃 했으니 세션스토리지 삭제
      sessionStorage.removeItem('user')
      sessionStorage.removeItem('kakao-token')

      // 메인페이지 이동
      window.location.href = '/'
    }).catch((e) => {
      // 이미 만료된 토큰
      if (e.response.data.code === -401) {
        // 로그아웃 안 된 상태로 메인페이지 이동
        navigate('/')
      }
    })
  }

  // 카카오 탈퇴하기
  const kakaoUnlink = () => {
    axios({
      method: 'POST',
      url: 'https://kapi.kakao.com/v1/user/unlink',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${Token}`
      },
    }).then(() => {
      alert('탈퇴가 완료되었습니다.')

      // 탈퇴 했으니 세션스토리지 삭제
      sessionStorage.removeItem('user')
      sessionStorage.removeItem('kakao-token')

      // 메인페이지 이동
      window.location.href = '/'
    }).catch((e) => {
      // 이미 만료된 토큰
      if (e.response.data.code === -401) {
        // 탈퇴불가한 상태로 메인페이지 이동동
        navigate('/')
      }
    })
  }

  
  return (
    <SC.Container>
      <SC.Title>마이페이지</SC.Title>

      <SC.ProBox>
        <SC.ImgNameBox>
          <SC.ImgBox></SC.ImgBox>
          <SC.NameBox>
            {/* 유저 닉네임 */}
            <SC.NameMent>스펀지밥</SC.NameMent>
            {/* 유저 도로명 주소 */}
            <SC.LocationMent>서초대로77번길</SC.LocationMent>
          </SC.NameBox>
        </SC.ImgNameBox>
        <Link to='/mypage/edit' style={{ textDecoration: "none", color: "#000"}}>
         <SC.ProEditBtn>프로필 수정</SC.ProEditBtn>
        </Link>
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
        <SC.LikeListBox>
          <SC.LikeListTitle>관심글 목록</SC.LikeListTitle>
          <Link to='/mypage/likelist' style={{ textDecoration: "none", color: "#000"}}>
            <SC.LikeListBtn>→</SC.LikeListBtn>
          </Link>
        </SC.LikeListBox>
      </SC.UserDosBox>
      <SC.LocationBtnBox>
        <Link to='/mypage/location'>
          <SC.LocationSetingBtn>현재 위치로 재등록하기</SC.LocationSetingBtn>
        </Link>
      </SC.LocationBtnBox>
      <SC.LogoutBox>
        <SC.LogoutButton onClick={kakaoLogout}>로그아웃</SC.LogoutButton>
      </SC.LogoutBox>
      <SC.BtnBox>
        <SC.UserleaveButton onClick={kakaoUnlink}>탈퇴하기</SC.UserleaveButton>
      </SC.BtnBox>
    </SC.Container>
  )
}

