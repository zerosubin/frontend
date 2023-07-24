import { styled } from "styled-components"

export const Container = styled.section`
  height: 100vh;
  margin: 60px 22px;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.h3`
  font-weight: 700;
  font-size: 22px;
  margin: 22px 0;
`
export const ImgBox = styled.div`
  position: relative;
  width: 55px;
  height: 55px;
  background-color: #b1b1b1;
  border-radius: 50%;
  cursor: pointer;
`
export const ImgInput = styled.input`
  width: 45px;
  height: 45px;
  margin: 4px 5px;
  opacity: 0;
  cursor: pointer;
`
export const Div = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  bottom: 0px;
  right: 0px;
  background-color: #F5F5F5;
  border-radius: 50%;
`
export const InputBox = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AlertMent = styled.span`
  font-size: 12px;
  margin-top: 12px;
`
export const NicknameInput = styled.input`
  width: 80%;
  margin: 6px 0;
  padding: 8px;
  border-radius: 12px;
  border: 0;

  background-color: #F5F5F5;

  outline: none;
`

export const Input = styled.input`
  width: 80%;
  margin: 6px 0;
  padding: 8px;
  border-radius: 12px;
  border: 0;
  background-color: #F5F5F5;
  color: #b1b1b1;
  font-family: var(--font-nanumfontB);
  outline: none;
`

export const TotalEditBtn =  styled.button`
  width: 80%;
  margin: 6px 0;
  padding: 10px;
  border-radius: 6px;
  border: 0;

  background-color: #0089B5;
  color: #fff;

  font-size: 16px;
  font-weight: 700;

  cursor: pointer;
`