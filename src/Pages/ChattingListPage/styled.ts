import styled from "styled-components"

const Container = styled.section`
  height: 100vh;
  margin: 80px 2px;
`
const Title = styled.h3`
  font-weight: 700;
  font-size: 26px;
  margin: 18px;

  font-family: var(--font-nanumfontEB);
`

const ListBox = styled.div`
  width: 100%;
  border-collapse: collapse;
  border-bottom: 1px solid #D9D9D9;
`

const ChattingCard = styled.div`
  width: 100%;
  padding: 8px 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #D9D9D9;

  cursor: pointer;
`

const ProImgBox = styled.div`
  display: flex;
  width: 58px;
  height: 58px;
  margin: 2px;
`

const ProImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`

const DoscBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2px;
  gap: 6px;
`

const Name = styled.h2`
  margin: 0px;
  font-size: 18px;
`

const LastMent = styled.span``

const RightBox = styled.div`
  display: flex;
  gap: 6px;
`

const WriteImgBox = styled.div`
  display: flex;
  width: 60px;
  heigth: 60px;
  padding: 2px;
`

const WriteImg = styled.img`
  width: 100%;
  heigth: 100%;
  border-radius: 6px;
`


export const SC = { Container, Title, ListBox, ChattingCard, RightBox, ProImgBox, ProImg, DoscBox, Name, LastMent, WriteImgBox, WriteImg }