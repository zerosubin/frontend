import { useState } from "react"
import { SC } from './styled' 

export default function MyhashtagPage() {
  const [newhashtag, setNewhashtag] = useState<string>('')
  
  // 해시태그 등록, db에 저장
  const HashtagSave =  () => {
    console.log(newhashtag)
  }
  return (
    <SC.Container>
      <SC.Title>관심사 키워드 등록</SC.Title>
      <SC.InputBox>
        <SC.HashtagInput placeholder="알람 받으실 키워드를 입력해주세요"
          onChange={(e) => {
            setNewhashtag(e.target.value)
          }}/>
        <SC.InputBtn 
          onClick={HashtagSave}>등록</SC.InputBtn>
      </SC.InputBox>
      <SC.HashtagListBox>
        <SC.ListTitle>나의 관심사 키워드</SC.ListTitle>
        <SC.ListBox>
          {
              Array.from({length : 5}).map((_, index) => {
                return (
                  <SC.HashtageBox key={index}>
                    <SC.HashtagMent>#산책</SC.HashtagMent>
                    <SC.DeleteButton>X</SC.DeleteButton>
                  </SC.HashtageBox>
                )
              })
            }
        </SC.ListBox>
      </SC.HashtagListBox>
    </SC.Container>
  )
}

