import { Link } from 'react-router-dom'
import { Container, Title, ProBox, ImgNameBox, ImgBox, NameBox, NameMent, LocationMent, ProEditBtn, UserDosBox, MannerBox, MannerTitle,MannerNumberBox, BigMent, SmMent,HashtagBox, MentBox, LikeTitle, LikeEditBtn,HashtagList,Tagment, LikeListBox, LikeListTitle, LikeListBtn, BtnBox, UserleaveButton} from './styled'

export default function MyPage() {
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
      <BtnBox>
        <UserleaveButton>탈퇴하기</UserleaveButton>
      </BtnBox>
    </Container>
  )
}

