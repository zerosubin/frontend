import { Link } from 'react-router-dom'
import * as SC from './styled'

export default function ChattingListPage() {
  return (
    <SC.Container>
      <SC.Title>채팅 목록</SC.Title>
      <SC.ListBox>
      {
          Array.from({length : 3}).map((_, index) => {
            return (
              <Link to="/chatting" style={{ textDecoration: "none", color: "#000"}}>
                <SC.ChattingCard key={index}>
                  <SC.RightBox>
                    <SC.ProImgBox>
                      <SC.ProImg  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7XZ2Imq08ItmvrtqXI-ZRiWNlow7qIshDg&usqp=CAU" />
                      </SC.ProImgBox>
                      <SC.DoscBox>
                        <SC.Name>스펀지밥</SC.Name>
                        <SC.LastMent>네!</SC.LastMent>
                      </SC.DoscBox>
                  </SC.RightBox>
                  <SC.WriteImgBox>
                    <SC.WriteImg src="https://images.mypetlife.co.kr/content/uploads/2022/12/16162807/IMG_1666-edited-scaled.jpg" />
                  </SC.WriteImgBox>
                </SC.ChattingCard>
              </Link>
           )
          })
        }
      </SC.ListBox>
    </SC.Container>
  )
}
