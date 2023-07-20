import { useState } from "react"
import { Container, Title, InputBox, HashtagInput, InputBtn, HashtagListBox, ListTitle, ListBox, HashtageBox, HashtagMent, DeleteButton} from './styled'

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
        <HashtagInput placeholder="알람 받으실 키워드를 입력해주세요"
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

