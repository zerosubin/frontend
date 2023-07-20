import { Link } from "react-router-dom"
import { Container, Title, ListBox, LikeCard, ImgBox, Img, DoscBox, DoscTitle, HashtagMent, MoneyMent, DeleteBtn} from './styled'

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