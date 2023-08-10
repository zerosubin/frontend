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

const Proimg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`
const BackBtn = styled.button`
  width: 100%;
  display: flex;
  border: 0;
  background-color: #fff;
  cursor: pointer;
`
const ImgBox = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  background-color: #b1b1b1;
  border-radius: 50%;
  cursor: pointer;
`
const DeleteimgBtn = styled.span`
  width: 100%;
  text-align: center;
  margin: 4px;
  padding: 8px;
  font-size: 10px;

  cursor: pointer;
`

const InputBox = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AlertMent = styled.span`
  font-size: 12px;
  margin-top: 12px;
`
const NicknameInput = styled.input`
  width: 80%;
  padding: 8px;
  border-radius: 12px;
  border: 0;

  background-color: #F5F5F5;

  outline: none;
`

const Input = styled.input`
  width: 80%;
  padding: 8px;
  border-radius: 12px;
  border: 0;
  background-color: #F5F5F5;
  color: #b1b1b1;
  font-family: var(--font-nanumfontB);
  outline: none;
`

const TotalEditBtn =  styled.button`
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

const NoticeBox = styled.div`
  width: 80%;
  margin: 16px 0 8px 0;
`

const Notice = styled.span`
  font-size: 16px;
  font-weight: 700;
`
const SmNotice = styled.span`
  padding: 6px;
  font-size: 12px;
  font-weight: 400;
  color: red;
`

export const SC = { SmNotice, NoticeBox, Notice, BackBtn, Container, Title, ImgBox, InputBox, NicknameInput, AlertMent, Input, TotalEditBtn, Proimg, DeleteimgBtn}