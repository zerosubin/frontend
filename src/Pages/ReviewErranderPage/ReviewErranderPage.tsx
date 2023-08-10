import { SC } from './styled'
import { FcBusinessman } from "react-icons/fc"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ReviewErranderPage() {
  // 의뢰인 평가 ---> 채팅창에서 평가로 넘어올 수 있도록?
  const [reviewValue, useReviewValue] = useState<string>('')
  const [detailreviewValue, useDetailreviewValue] = useState<string>('')

  // 첫번째 평가
  const CheckReview = (e:any) => {
    let checkPick = document.getElementsByName('fristcheckWrap')
    Array.prototype.forEach.call(checkPick, function (el) {
      el.checked = false
    })
    e.target.checked = true
    useReviewValue(e.target.defaultValue)
  }

  // 아쉬웠다면?
  const CheckDetailReview = (e:any) => {
    let checkPick = document.getElementsByName('secondcheckWrap')
    Array.prototype.forEach.call(checkPick, function (el) {
      el.checked = false
    })
    e.target.checked = true
    useDetailreviewValue(e.target.defaultValue)
  }

  useEffect(() => {
      console.log(reviewValue)
  }, [reviewValue])

  useEffect(() => {
      console.log(detailreviewValue)
  }, [detailreviewValue])

  // 평가완료버튼
  const navigate = useNavigate()
  const sendTotalReview = () => {
    // reviewValue, detailreviewValue 점수 보내기
    // 체크되었다면? 메인페이지로 이동
    navigate('/')
    // 임시 alert창
    alert('평가 완료')
  }


  // 이 둘을 보내주면 됨
  // reviewValue -> 좋아요, 보통이에요, 아쉬워요 중에 고른 해당 평가에 대한 점수
  // detailreviewValue -> 아쉬웠다면?에서 고른 평가 코멘트 s

  return (
    <SC.Container>
      <SC.Title>의뢰인 평가</SC.Title>
      <SC.FristreviewBox>
        <SC.IconBox>
          <FcBusinessman size={66}/>
        </SC.IconBox>
        <SC.CheckBoxCnt>
            <input type="checkbox" id="좋아요" name="fristcheckWrap" value="5"
             onClick={CheckReview} />
            <label htmlFor="좋아요">좋아요</label>

            <input type="checkbox" id="보통이에요" name="fristcheckWrap" value="3"
              onClick={CheckReview}  />
            <label htmlFor="보통이에요">보통이에요</label>

            <input type="checkbox" id="아쉬워요" name="fristcheckWrap" value="1" 
              onClick={CheckReview}  />
            <label htmlFor="아쉬워요">아쉬워요</label>
        </SC.CheckBoxCnt>
      </SC.FristreviewBox>
      <SC.SecondReviewBox>
        <SC.SmTitle>아쉬웠다면?</SC.SmTitle>
        <SC.CheckBoxCnt>
            <input type="checkbox" id="정산문제" name="secondcheckWrap" value="정산문제"
              onClick={CheckDetailReview}  />
            <label htmlFor="정산문제">정산문제</label>

            <input type="checkbox" id="불합리한 의뢰" name="secondcheckWrap" value="불합리한 의뢰" 
              onClick={CheckDetailReview}  />
            <label htmlFor="불합리한 의뢰">불합리한 의뢰</label>
        </SC.CheckBoxCnt>
      </SC.SecondReviewBox>
      <SC.FinishBtn onClick={sendTotalReview}>평가 완료</SC.FinishBtn>
    </SC.Container>
  )
}