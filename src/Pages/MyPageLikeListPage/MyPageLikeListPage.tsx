import { Link } from "react-router-dom"
import { BiArrowBack } from 'react-icons/bi'
import { SC } from './styled'
import { instanceHeader } from "../API/axiosAPI"
import { useEffect, useState } from "react"

export default function MyPageLikeListPage() {
const [list, setList] = useState<any>([])
  const interestsList = () => {
    try {
      instanceHeader({
        url: 'users/interests',
        method: 'get',
      })
      .then((res) => {
        console.log(res)
        setList(res)
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  useEffect(() => {
    interestsList()
  }, [])

  return (
    <SC.Container>
      <SC.BackBtn onClick={() => history.back()}>
        <BiArrowBack size={24} />
      </SC.BackBtn>
      <SC.Title>관심글 목록</SC.Title>
      <SC.ListBox>
        {
          list.length !== 0 
          ?
          list.map((product: any, index: any) => {
            return (
              <Link to='/view' style={{ textDecoration: "none", color: "#000"}}>
                <SC.LikeCard key={index}>
                  <SC.ImgBox>
                  {/* 이미지 받아오기 */}
                    <SC.Img src="https://images.mypetlife.co.kr/content/uploads/2023/02/03094318/AdobeStock_366413112-1024x682.jpeg"/>
                  </SC.ImgBox>
                  <SC.DoscBox>
                    <SC.DoscTitle>{product.errandTitle ? product.errandTitle : '관심글이 없습니다.'}</SC.DoscTitle>
                    <SC.HashtagMent>#강아지 #산책</SC.HashtagMent>
                    <SC.MoneyMent>
                      시급 10,000원
                      <SC.DeleteBtn>X</SC.DeleteBtn>
                    </SC.MoneyMent>
                  </SC.DoscBox>
                </SC.LikeCard>
              </Link>
           )
          })
          :
          <p>관심글이 없습니다.</p>
        }
      </SC.ListBox>
    </SC.Container>
  )
}