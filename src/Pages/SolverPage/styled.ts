import styled from "styled-components"

export const Container = styled.section`
  height: 100vh;
  margin: 80px 2px;
`
export const Title = styled.h3`
  font-weight: 700;
  font-size: 26px;
  margin: 18px;

  font-family: var(--font-nanumfontEB);
`

export const SolverFixButton = styled.button`
width: 80px;
background-color: rgb(0, 137, 181);
border: none;
color: white;
border-radius: 20px;
`
export const SolverButton = styled.button`
width: 80px;
background-color: red;
border: none;
color: white;
border-radius: 20px;
`

export const ListBox = styled.div`
  width: 100%;
  border-collapse: collapse;
  border-bottom: 1px solid #D9D9D9;
`

export const ChattingCard = styled.div`
  width: 100%;
  padding: 8px 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #D9D9D9;

  cursor: pointer;
`

export const ProImgBox = styled.div`
  display: flex;
  width: 58px;
  height: 58px;
  margin: 2px;
`

export const ProImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`

export const DoscBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2px;
  gap: 6px;
`

export const Name = styled.h2`
  margin: 0px;
  font-size: 18px;
`

export const LastMent = styled.span``

export const RightBox = styled.div`
  display: flex;
  gap: 6px;
`

export const WriteImgBox = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  padding: 2px;
`

export const WriteImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
`