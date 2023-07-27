import { Link } from "react-router-dom"
import { SC } from './styled'

export default function MyPageLikeListPage() {

  // 관심글 삭제 - 관심글의 id
  const DeleteLikeCard = () => {
  }

  return (
    <SC.Container>
      <SC.Title>관심글 목록</SC.Title>
      <SC.ListBox>
        {
          Array.from({length : 3}).map((_, index) => {
            return (
              <Link to='/view' style={{ textDecoration: "none", color: "#000"}}>
                <SC.LikeCard key={index}>
                  <SC.ImgBox>
                  {/* 이미지 받아오기 */}
                    <SC.Img src="https://images.mypetlife.co.kr/content/uploads/2023/02/03094318/AdobeStock_366413112-1024x682.jpeg"/>
                  </SC.ImgBox>
                  <SC.DoscBox>
                    <SC.DoscTitle>강아지 산책 시켜주실 분</SC.DoscTitle>
                    <SC.HashtagMent>#강아지 #산책</SC.HashtagMent>
                    <SC.MoneyMent>
                      시급 10,000원
                      <SC.DeleteBtn onClick={DeleteLikeCard}>X</SC.DeleteBtn>
                    </SC.MoneyMent>
                  </SC.DoscBox>
                </SC.LikeCard>
              </Link>
           )
          })
        }
      </SC.ListBox>
    </SC.Container>
  )
}