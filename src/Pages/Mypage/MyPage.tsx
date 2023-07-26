import { Link, useNavigate } from 'react-router-dom'
import { Container, Title, ProBox, ImgNameBox, ImgBox, NameBox, NameMent, LocationMent, ProEditBtn, UserDosBox, MannerBox, MannerTitle,MannerNumberBox, BigMent, SmMent,HashtagBox, MentBox, LikeTitle, LikeEditBtn,HashtagList,Tagment, LikeListBox, LikeListTitle, LikeListBtn, BtnBox, UserleaveButton, LogoutBox, LogoutButton, LocationSetingBtn, LocationBtnBox} from './styled'
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
    <Container>
      <Title>마이페이지</Title>

      <ProBox>
        <ImgNameBox>
          <ImgBox></ImgBox>
          <NameBox>
            {/* 유저 닉네임 */}
            <NameMent>스펀지밥</NameMent>
            {/* 유저 도로명 주소 */}
            <LocationMent>서초대로77번길</LocationMent>
          </NameBox>
        </ImgNameBox>
        <Link to='/mypage/edit' style={{ textDecoration: "none", color: "#000"}}>
         <ProEditBtn>프로필 수정</ProEditBtn>
        </Link>
      </ProBox>

      <UserDosBox>
        <MannerBox>
          <MannerTitle>매너등급</MannerTitle>
          <MannerNumberBox>
            <BigMent>3</BigMent>
            <SmMent> / 5</SmMent>
          </MannerNumberBox>
        </MannerBox>

        <HashtagBox>
          <MentBox>
            <LikeTitle>나의 관심사 키워드</LikeTitle>
            <Link to='/mypage/hashtag' style={{ textDecoration: "none", color: "#000"}}>
              <LikeEditBtn>수정하기</LikeEditBtn>
            </Link>
          </MentBox>
          <HashtagList>
            {
              Array.from({length : 5}).map((_, index) => {
                return (
                  <Tagment key={index}>#산책</Tagment>
                )
              })
            }
          </HashtagList>
        </HashtagBox>
        <LikeListBox>
          <LikeListTitle>관심글 목록</LikeListTitle>
          <Link to='/mypage/likelist' style={{ textDecoration: "none", color: "#000"}}>
            <LikeListBtn>→</LikeListBtn>
          </Link>
        </LikeListBox>
      </UserDosBox>
      <LocationBtnBox>
        <Link to='/mypage/location'>
          <LocationSetingBtn>현재 위치로 재등록하기</LocationSetingBtn>
        </Link>
      </LocationBtnBox>
      <LogoutBox>
        <LogoutButton onClick={kakaoLogout}>로그아웃</LogoutButton>
      </LogoutBox>
      <BtnBox>
        <UserleaveButton onClick={kakaoUnlink}>탈퇴하기</UserleaveButton>
      </BtnBox>
    </Container>
  )
}

