import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

const ImgNameBox = styled.div`
  display: flex;
`

const ProBox = styled.div`
  width: 90%;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ImgBox = styled.div`
  width: 55px;
  height: 55px;
  background-color: red;
  
  border-radius: 50%;
`
const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  margin: 0 8px;
`
const NameMent = styled.span`
  font-weight: 800;
  font-size: 18px;
`
const LocationMent = styled.span`
  font-size: 12px;
`
const ProEditBtn = styled.button`
  padding: 8px;
  border: 0;
  border-radius: 12px;
  background-color: #F5F5F5;
  font-weight: 700;
  cursor: pointer;
`

const UserDosBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 6%;
  margin: 4% 2%;
  border: 0;
  border-radius: 12px;
  background-color: #E4E4E4;
`

const MannerBox = styled.div`
  display: flex;
  justify-content: space-between;
`
const MannerTitle = styled.span`
  font-size: 18px;
  font-family: var(--font-nanumfontB);
`

const MannerNumberBox = styled.div`
  display: flex; 
  align-items: baseline;
`

const BigMent = styled.span`
  font-size: 22px;
  font-family: var(--font-nanumfontB);
  padding: 0 2px;
`

const SmMent = styled.span`
  font-size: 14px;
`

const HashtagBox = styled.div`
`

const LikeTitle = styled.span`
  font-size: 18px;
  font-family: var(--font-nanumfontB);
`
const MentBox = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: center;
`
const LikeEditBtn = styled.button`
  padding: 4px;
  border: 0;
  border-bottom: 1px dashed #000;
  background-color: #E4E4E4;  
  font-weight: 700;
  cursor: pointer;
`

const HashtagList = styled.div`
  max-width: 269px;
  padding: 8px 0;

  display: flex;
  flex-wrap: wrap;
`

const Tagment = styled.span`
  padding: 8px;
  margin: 4px;
  border: 0;
  border-radius: 6px;
  background-color: #fff;
  font-size: 12px;
  font-weight: 700;
`

const LikeListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LikeListTitle = styled.span`
  font-size: 18px;
  font-family: var(--font-nanumfontB);
`

const LikeListBtn = styled.button`
  border: 0;
  background-color: #E4E4E4;  
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`