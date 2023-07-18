import styled from 'styled-components'

export default function MyPage() {
  return (
    <Container>
      <Title>마이페이지</Title>

      <ProBox>
        <ImgNameBox>
          <ImgBox></ImgBox>
          <NameBox>
            <NameMent>스펀지밥</NameMent>
            <LocationMent>서초대로77번길</LocationMent>
          </NameBox>
        </ImgNameBox>
        <ProEditBtn>프로필 수정</ProEditBtn>
      </ProBox>

      <UserDosBox>
        <MannerBox>
          <span>매너등급</span>
          <MentBox>
            <BigMent>3</BigMent>
             <SmMent>/ 5</SmMent>
          </MentBox>
        </MannerBox>

        <HashtagBox>
          <MentBox>
            <span>나의 관심사 키워드</span>
            <LikeEditBtn>수정하기</LikeEditBtn>
          </MentBox>
          <HashtagList>
            {
              Array.from({length : 5}).map((_, index) => {
                return (
                  <span key={index}>#해시태드</span>
                )
              })
            }
          </HashtagList>
        </HashtagBox>
        <LikeListBox>
          <LikeListTitle>관심글 목록</LikeListTitle>
          <LikeListBtn>→</LikeListBtn>
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
  width: 100%;
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
  font-size: 20px;
`
const LocationMent = styled.span`
  font-size: 14px;
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
  display: flex;
  flex-direction: column;

  padding: 8px;
`

const MannerBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const MentBox = styled.div``

const BigMent = styled.span`
`

const SmMent = styled.span``

const HashtagBox = styled.div``

const LikeEditBtn = styled.button``

const HashtagList = styled.div``

const LikeListBox = styled.div``

const LikeListTitle = styled.span``

const LikeListBtn = styled.button``