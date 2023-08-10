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

const BackBtn = styled.button`
  width: 100%;
  display: flex;
  border: 0;
  background-color: #fff;
  cursor: pointer;
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
  justify-content: space-between;
  gap: 4px;
  padding: 18px;
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
  color: red;
  font-family: var(--font-nanumfontB);

  cursor: pointer;
`
const NoticeBox = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 32px;
  gap: 10px;
  border-radius: 10px;
  padding: 10px;
`

const Notification = styled.p`
  font-size: 18px;
`
export const SC = { NoticeBox, Notification, BackBtn, Container, Title, ListBox, LikeCard, ImgBox, Img, DoscBox, DoscTitle, HashtagMent, MoneyMent, DeleteBtn}