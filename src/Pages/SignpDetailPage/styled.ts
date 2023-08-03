import { styled } from "styled-components"

const Container = styled.section`
  margin: 80px 22px;
`
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h1`
  font-weight: 700;
  font-size: 22px;
  margin: 12px 0;
`

const Box = styled.div`
  width: 85%;
  display: flex;
  align-items: baseline;
  flex-direction: column;
  .message {
    &.success {
      color: #0500ff;
    }
    &.error {
      color: #ff2727;
    }
  }
`

const NicknameInputBox = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
`
const NicknameInput = styled.input`
  width: 90%;
  margin: 6px 0;
  padding: 8px;
  border-radius: 12px;
  border: 0;

  background-color: #F5F5F5;

  outline: none;
`

const Alertment = styled.span`
  font-size: 12px;
  padding-left: 8px;
`

const NicknameCheckBtn = styled.button`
  margin-left: 8px;
  padding: 10px;
  border-radius: 8px;
  border: 0;

  background-color: #0089B5;
  color: #fff;
  
  font-size: 12px;
  font-weight: 500;
`


const UserLastBtn = styled.button`
  width: 85%;
  margin-top: 260px;
  padding: 10px;
  border-radius: 6px;
  border: 0;

  background-color: #0089B5;
  color: #fff;

  font-size: 16px;
  font-weight: 700;

  cursor: pointer;
`
const LocationBox = styled.div`
  position: relative;
  width: 85%;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  background-color: #F5F5F5;
`
const LocationMent =  styled.span`
  margin: 0 8px;
  font-size: 13px;

  overflow: scroll;
  overflow: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }

`
const PostBox =  styled.div`
  width: 100%;
  height: 300px;
  position: absolute;
  top: 0;
  z-index: 1;
`

const LocationBtn = styled.button`
  width: 40%;
  height: 100%;
  margin: 10px;
  padding: 5px 0;
  border: 0;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 700;
  background-color: #fff;

  cursor: pointer;  
`

export const SC ={ Container, InputBox, Title, Box, PostBox, Alertment, UserLastBtn, NicknameCheckBtn, NicknameInput, NicknameInputBox, LocationBtn, LocationMent, LocationBox}