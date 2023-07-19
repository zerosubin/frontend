import { Link } from "react-router-dom"
import { styled } from "styled-components"

export default function MyPageLikeListPage() {

  // 관심글 삭제 - 관심글의 id
  const DeleteLikeCard = () => {
  }

  return (
    <Container>
      <Title>관심글 목록</Title>
      <ListBox>
        {
          Array.from({length : 3}).map((_, index) => {
            return (
              <Link to='/view' style={{ textDecoration: "none", color: "#000"}}>
                <LikeCard key={index}>
                  <ImgBox>
                  {/* 이미지 받아오기 */}
                    <Img src="https://images.mypetlife.co.kr/content/uploads/2023/02/03094318/AdobeStock_366413112-1024x682.jpeg"/>
                  </ImgBox>
                  <DoscBox>
                    <DoscTitle>강아지 산책 시켜주실 분</DoscTitle>
                    <HashtagMent>#강아지 #산책</HashtagMent>
                    <MoneyMent>
                      시급 10,000원
                      <DeleteBtn onClick={DeleteLikeCard}>X</DeleteBtn>
                    </MoneyMent>
                  </DoscBox>
                </LikeCard>
              </Link>
           )
          })
        }
      </ListBox>
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
const ListBox = styled.div`
  width: 100%;
`

const LikeCard = styled.div`
  display: flex;
  gap: 4px;
  margin: 8px 0;
  border: 1px solid #b1b1b1;
  border-radius: 12px;
`

const ImgBox = styled.div`
  max-width: 75px;
  min-width: 75px;
  max-height: 82px
  min-height: 82px
  border-radius: 12px 0 0 12px;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
  border-radius: 12px 0 0 12px;
`

const DoscBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  padding: 8px;
  width: 100%;
`

const DoscTitle = styled.h4`
  font-weight: 700;
`


const HashtagMent = styled.span`
  font-size: 10px;
  color: #B1B1B1;
`

const MoneyMent = styled.span`
  position: relative;
  font-size: 12px;
  font-weight: 700;
`


const DeleteBtn = styled.span`
  position: absolute;
  right: 8px;
  color: red;
  font-family: var(--font-nanumfontB);

  cursor: pointer;
`