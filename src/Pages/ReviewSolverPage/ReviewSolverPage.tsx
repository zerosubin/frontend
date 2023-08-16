import * as SC from './styled'
import { FcInspection } from "react-icons/fc"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { instanceHeader } from '../API/axiosAPI'

export default function ReviewErranderPage() {
  const [reviewValue, useReviewValue] = useState<string>('')
  const [detailreviewValue, useDetailreviewValue] = useState<string>('')
  const { memberId } = useParams<{memberId: string}>()
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
    const data = {
      division: "PERFORMER_REVIEW",
      revieweeId: memberId,
      reviewGrade: reviewValue,
      comment: reviewValue ? reviewValue : detailreviewValue
    }
    try {
      instanceHeader({
        url: `errands/${memberId}/review`,
        method: 'post',
        data: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res: any) => {
        console.log(res)
      })
    } catch (error) {
      console.log(error)
    }
    // navigate('/')
    alert('평가 완료')
  }

  return (
    <SC.Container>
      <SC.Title>의뢰인 평가</SC.Title>
      <SC.FristreviewBox>
        <SC.IconBox>
          <FcInspection size={66}/>
        </SC.IconBox>
        <SC.CheckBoxCnt>
            <input type="checkbox" id="좋아요" name="fristcheckWrap" value="Good"
             onClick={CheckReview} />
            <label htmlFor="좋아요">좋아요</label>

            <input type="checkbox" id="보통이에요" name="fristcheckWrap" value="Normal"
              onClick={CheckReview}  />
            <label htmlFor="보통이에요">보통이에요</label>

            <input type="checkbox" id="아쉬워요" name="fristcheckWrap" value="Bad" 
              onClick={CheckReview}  />
            <label htmlFor="아쉬워요">아쉬워요</label>
        </SC.CheckBoxCnt>
      </SC.FristreviewBox>
      <SC.SecondReviewBox>
        { reviewValue === 'Bad' &&
          (<>
        <SC.SmTitle>아쉬웠다면?</SC.SmTitle>
        <SC.CheckBoxCnt>
            <input type="checkbox" id="지각" name="secondcheckWrap" value="지각"
              onClick={CheckDetailReview}  />
            <label htmlFor="지각">지각</label>
            <input type="checkbox" id="수행 능력 불만족" name="secondcheckWrap" value="수행 능력 불만족" 
              onClick={CheckDetailReview}  />
            <label htmlFor="수행 능력 불만족">수행 능력 불만족</label>
        </SC.CheckBoxCnt>
        </>)
      }
      </SC.SecondReviewBox>
      <SC.FinishBtn onClick={sendTotalReview}>평가 완료</SC.FinishBtn>
    </SC.Container>
  )
}