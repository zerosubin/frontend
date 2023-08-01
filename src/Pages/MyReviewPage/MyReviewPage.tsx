// import { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import * as SC from './styled'

export default function MyReviewPage() {
  // 각각 코멘트 넣어주기
  // 없으면 초기화 멘트 보여주기
  // const [Comment, setComment] = useState<string>('평가 코멘트가 없습니다')

  return (
    <SC.Container>
      <SC.BackBtn onClick={() => history.back()}>
        <BiArrowBack size={24} />
      </SC.BackBtn>
      <SC.Title>나의 평가 내역</SC.Title>
      <SC.ListBox>
      {
          Array.from({length : 5}).map((_, index) => {
            return (
              <SC.ReviewCard key={index}>
                <SC.ScoreBox>
                  <SC.Detail>매너등급</SC.Detail>
                  <SC.Score>2</SC.Score>
                </SC.ScoreBox>
                <SC.CommentBox>
                  <SC.Detail>코멘트</SC.Detail>
                  <SC.Comment>수행 능력 불만족</SC.Comment>
                </SC.CommentBox>
              </SC.ReviewCard>
           )
          })
        }
      </SC.ListBox>
    </SC.Container>
  )
}
