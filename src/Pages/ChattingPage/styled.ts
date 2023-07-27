import styled from "styled-components"

export const Container = styled.section`
  height: 100vh;
  margin: 80px 2px;
`
export const UserName = styled.h3`
  font-weight: 700;
  font-size: 20px;
  margin: 18px;
  text-align: center;

  font-family: var(--font-nanumfontEB);
`

export const ContentBox = styled.div`
  width: 100%;
`

export const TopBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 4px;
  margin: 4px 0;

  border-top: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
`

export const WriteImgBox = styled.div`
  width: 58px;
  height: 58px;
  padding: 2px;
`

export const WriteImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
`

export const DoscBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Title = styled.h2`
  margin: 0px;
  font-size: 20px;
`

export const Price = styled.span`
  font-size: 14px;
  font-family: var(--font-nanumfontEB);
`

export const ChattingBox = styled.div`
  height: 60vh;
`
export const Mybox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
`

export const MyMent = styled.span`
  padding: 10px 14px;
  border: 0;
  border-radius: 12px;
  background-color: #0089B5;
  color: #fff;
`

export const AnotherBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 8px 4px;  
`

export const AnotherImgBox = styled.div`
  width: 48px;
  height: 48px;
`

export const AnotherImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`

export const AnotherMent = styled.span`
  padding: 10px 14px;
  border: 0;
  border-radius: 12px;
  background-color: #E4E4E4;
  color: #000;
`

export const SendingChattingBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 11px 14px;
  border-top: 1px solid #D9D9D9;
`

export const SendingInput = styled.input`
  width: 80%;
  padding: 12px;
  border-radius: 18px;
  border: 0;
  background-color: #E4E4E4;

  outline: none;
`

export const SendingBtn = styled.button`
  width: 20%;
  background-color:transparent;
  border: 0;

  cursor: pointer;
`