import { Link } from "react-router-dom"
import { BiArrowBack, BiConfused } from 'react-icons/bi'
import { SC } from './styled'
import { instanceHeader } from "../API/axiosAPI"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { likelist } from "../../recoil/atoms"

export default function MyPageLikeListPage() {
const [ListALL, setListALL] = useRecoilState<any>(likelist)

  const interestsList = () => {
    try {
      instanceHeader({
        url: 'users/interests',
        method: 'get',
      })
      .then((res) => {
        setListALL(res)
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  useEffect(() => {
    interestsList()
  }, [])

  const ondelete = (productid: any) => {
    console.log(productid)
    try {
      instanceHeader({
        url: `users/interests/${productid}`,
        method: 'delete',
      })
      .then((res) => {
        setListALL(res)
        console.log('삭제되었습니다')
      })
    } catch (error: any) {
      console.log(error)
    }
  }


  return (
    <SC.Container>
      <SC.BackBtn onClick={() => history.back()}>
        <BiArrowBack size={24} />
      </SC.BackBtn>
      <SC.Title>관심글 목록</SC.Title>
      <SC.ListBox>
        {
          ListALL.length !== 0 
          ?
          ListALL.map((product: any, index: number) => {
            return (
              <Link to={`/errand/${product.errandId}`} key={`${index}_${product.errandId}`} style={{ textDecoration: "none", color: "#000"}}>
                <SC.LikeCard >
                  <SC.ImgBox>
                    <SC.Img src="https://images.mypetlife.co.kr/content/uploads/2023/02/03094318/AdobeStock_366413112-1024x682.jpeg"/>
                  </SC.ImgBox>
                  <SC.DoscBox>
                    <SC.DoscTitle>{product.errandTitle}</SC.DoscTitle>
                    <SC.HashtagMent>#강아지 #산책</SC.HashtagMent>
                    <SC.MoneyMent>
                      시급 10,000원
                      <SC.DeleteBtn onClick={(e:any) => {
                        e.preventDefault()
                        ondelete(`${product.errandId}`)
                      }}>X</SC.DeleteBtn>
                    </SC.MoneyMent>
                  </SC.DoscBox>
                </SC.LikeCard>
              </Link>
           )
          })
          :
          <SC.NoticeBox>
            <BiConfused size={32}/>
            <SC.Notification>관심글이 없습니다.</SC.Notification>
          </SC.NoticeBox>
        }
      </SC.ListBox>
    </SC.Container>
  )
}