import { styled } from "styled-components"

const Container = styled.section`
  height: 100vh;
  margin: 60px 22px;

  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h3`
  font-weight: 700;
  font-size: 22px;
  margin: 22px 0;
`
const ListBox = styled.div`
  width: 100%;
`

const LikeCard = styled.div`
  display: flex;
  gap: 4px;
  margin: 8px 0;
  border: 1px solid #b1b1b1;
  border-radius: 12px;
`

const ImgBox = styled.div`
  max-width: 75px;
  min-width: 75px;
  max-height: 82px;
  min-height: 82px;
  border-radius: 12px 0 0 12px;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
  border-radius: 12px 0 0 12px;
`

const DoscBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  padding: 8px;
  width: 100%;
`

const DoscTitle = styled.h4`
  font-weight: 700;
`


const HashtagMent = styled.span`
  font-size: 10px;
  color: #B1B1B1;
`

const MoneyMent = styled.span`
  position: relative;
  font-size: 12px;
  font-weight: 700;
`


const DeleteBtn = styled.span`
  position: absolute;
  right: 8px;
  color: red;
  font-family: var(--font-nanumfontB);

  cursor: pointer;
`

export const SC = { Container, Title, ListBox, LikeCard, ImgBox, Img, DoscBox, DoscTitle, HashtagMent, MoneyMent, DeleteBtn}