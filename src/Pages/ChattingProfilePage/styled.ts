import styled from "styled-components"

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  margin: 70px 2px;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImgBox = styled.div`
  width: 220px;
  height: 220px;
  margin: 8px;
  padding: 8px;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Name = styled.h2`
  font-size: 32px;
  font-family: var(--font-nanumfontEB);
  margin: 12px;
`

export const Location = styled.span`
  padding: 6px;
`
export const BackBtn = styled.button`
  width: 90%;
  display: flex;
  border: 0;
  background-color: #fff;
  cursor: pointer;
`
export const ReviewBOX = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 18px;
  margin: 18px;
  background-color: #0089B5;
  border: 0;
  border-radius: 12px;
  color: #fff;
`

export const Title = styled.h3`
  font-size: 20px;
  font-weigth: 700;
  margin: 6px;
`

export const LankScore = styled.h2`
  margin: 0;
  font-family: var(--font-nanumfontEB);
`