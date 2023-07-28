import { styled } from "styled-components"

export const Container = styled.section`
  height: 100vh;
  margin: 60px auto;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.h3`
  font-weight: 700;
  font-size: 22px;
  margin: 22px 0;
`

export const ListBox = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  gap: 8px;
  padding: 0 6px;
`

export const ReviewCard = styled.div`
  width: 100%;
  border: 1px solid #ececec;
  border-radius: 6px;
`

export const ScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2px 0;
`

export const Detail = styled.span`
  font-size: 8px;
  padding: 4px;
  color: #b1b1b1;
`

export const Score = styled.h2`
  margin: 0;
  padding: 6px 0;
  text-align: center;
  font-family: var(--font-nanumfontEB);
`

export const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ececec;
`

export const Comment = styled.span`
  font-size: 13px;
  margin: 10px 0;
  text-align: center;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  
  overflow: hidden;
  text-overflow: ellipsis;
`