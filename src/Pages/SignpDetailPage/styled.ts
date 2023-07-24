import { styled } from "styled-components"

export const Container = styled.section`
  margin: 80px 22px;
`
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.h1`
  font-weight: 700;
  font-size: 22px;
  margin: 12px 0;
`

export const Box = styled.div`
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

export const NicknameInputBox = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
`
export const NicknameInput = styled.input`
  width: 70%;
  margin: 6px 0;
  padding: 8px;
  border-radius: 12px;
  border: 0;

  background-color: #F5F5F5;

  outline: none;
`

export const Alertment = styled.span`
  font-size: 12px;
  padding-left: 8px;
`

export const NicknameCheckBtn = styled.button`
  margin-left: 8px;
  padding: 10px;
  border-radius: 8px;
  border: 0;

  background-color: #0089B5;
  color: #fff;
  
  font-size: 12px;
  font-weight: 500;
`


export const UserLastBtn = styled.button`
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

// export const MapBox = styled.div`
//   width: 280px;
//   height: 250px;
//   margin: 15px 0;
//   background-color: white;

//   display: flex;
//   justify-content: center;
// `

// export const MapContainer = styled.div`
//   width: 100%;
//   height: 100%;
// `

export const LocationBox = styled.div`
  position: relative;
  width: 85%;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  background-color: #F5F5F5;
`
export const LocationMent =  styled.span`
  margin: 0 8px;
  font-size: 12px;

  overflow: scroll;
  overflow: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }

`
export const PostBox =  styled.div`
  width: 100%;
  height: 300px;
  position: absolute;
  top: 0;
  z-index: 1;
`

export const LocationBtn = styled.button`
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