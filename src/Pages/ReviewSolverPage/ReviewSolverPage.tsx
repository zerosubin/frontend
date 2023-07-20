import { Container, Title, FristreviewBox, IconBox, CheckBoxCnt, SecondReviewBox, SmTitle, FinishBtn } from "./styled"
import { FcInspection } from "react-icons/fc"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ReviewErranderPage() {
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

  return (
    <Container>
      <Title>의뢰인 평가</Title>
      <FristreviewBox>
        <IconBox>
          <FcInspection size={66}/>
        </IconBox>
        <CheckBoxCnt>
            <input type="checkbox" id="좋아요" name="fristcheckWrap" value="좋아요"
             onClick={CheckReview} />
            <label htmlFor="좋아요">좋아요</label>

            <input type="checkbox" id="보통이에요" name="fristcheckWrap" value="보통이에요"
              onClick={CheckReview}  />
            <label htmlFor="보통이에요">보통이에요</label>

            <input type="checkbox" id="아쉬워요" name="fristcheckWrap" value="아쉬워요" 
              onClick={CheckReview}  />
            <label htmlFor="아쉬워요">아쉬워요</label>
        </CheckBoxCnt>
      </FristreviewBox>
      <SecondReviewBox>
        <SmTitle>아쉬웠다면?</SmTitle>
        <CheckBoxCnt>
            <input type="checkbox" id="지각" name="secondcheckWrap" value="지각"
              onClick={CheckDetailReview}  />
            <label htmlFor="지각">지각</label>

            <input type="checkbox" id="수행 능력 불만족" name="secondcheckWrap" value="수행 능력 불만족" 
              onClick={CheckDetailReview}  />
            <label htmlFor="수행 능력 불만족">수행 능력 불만족</label>
        </CheckBoxCnt>
      </SecondReviewBox>
      <FinishBtn onClick={sendTotalReview}>평가 완료</FinishBtn>
    </Container>
  )
}