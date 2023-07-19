import { useState } from "react"
import styled from "styled-components"

export default function MyhashtagPage() {
  const [newhashtag, setNewhashtag] = useState<string>('')
  
  // 해시태그 등록, db에 저장
  const HashtagSave =  () => {
    console.log(newhashtag)
  }
  return (
    <Container>
      <Title>관심사 키워드 등록</Title>
      <InputBox>
        <HashtagInput placeholder="키워드를 입력해주세요"
          onChange={(e) => {
            setNewhashtag(e.target.value)
          }}/>
        <InputBtn 
          onClick={HashtagSave}>등록</InputBtn>
      </InputBox>
      <HashtagListBox>
        <ListTitle>나의 관심사 키워드</ListTitle>
        <ListBox>
          {
              Array.from({length : 5}).map((_, index) => {
                return (
                  <HashtageBox key={index}>
                    <HashtagMent>#산책</HashtagMent>
                    <DeleteButton>X</DeleteButton>
                  </HashtageBox>
                )
              })
            }
        </ListBox>
      </HashtagListBox>
    </Container>
  )
}

const Container = styled.section`
  heigth: 100vh;
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
const InputBox = styled.div`
  position: relative;
  width: 95%;
  display: flex;
`
const HashtagInput = styled.input`
  width: 80%;
  margin: 0 auto;
  padding: 6px;
  border:0;
  border-bottom: 1px solid #000;

  outline: none;
`

const InputBtn = styled.button`
  position: absolute;
  right: 32px;
  margin-top: 4px;
  border: 0;
  background-color: transparent;
  font-size: 14px;
  font-family: var(--font-nanumfontB);

  cursor: pointer;
`

const HashtagListBox = styled.div`
  margin: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ListTitle = styled.h4`
  font-size: 15px;
  font-family: var(--font-nanumfontB);
`

const ListBox = styled.div`
  max-width: 269px;
  min-width: 269px;
  padding: 8px 14px;
  margin: 14px 8px;

  display: flex;
  flex-wrap: wrap;
  border-radius: 12px;
  background-color: #f5f5f5;
`

const HashtageBox = styled.div`
  padding: 8px;
  margin: 8px;
  border: 0;
  border-radius: 10px;
  background-color: #fff;
`

const HashtagMent = styled.span`
  font-size: 12px;
  font-weight: 700;
`

const DeleteButton = styled.span`
  padding: 4px;
  border: 0;
  background-color: transparent;
  color: red;

  font-size: 12px;
  font-weight: 700;

  cursor: pointer;
`