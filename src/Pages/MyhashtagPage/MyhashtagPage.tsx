import { useState } from "react"
import { SC } from './styled' 
import { BiArrowBack } from "react-icons/bi"
import { instanceHeader } from "../API/axiosAPI"

export default function MyhashtagPage() {
  const [newhashtag, setNewhashtag] = useState<string>('')
  
  // 해시태그 등록, db에 저장
  const HashtagSave =  () => {
    console.log(newhashtag)
    setNewhashtag('')
  }

  const KeyHashtagSave = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      console.log(newhashtag)
      setNewhashtag('')
    }
  }

  // 해시태그 등록
  const postHashtag  = () => {
    try {
      instanceHeader({
        url: `users/hashtags?tag=${newhashtag}`,
        method: 'post',
      })
      .then((res) => {
        console.log(res)
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  // 해시태그 조회
  const getHashtag  = () => {
    try {
      instanceHeader({
        url: 'users/hashtags',
        method: 'get',
      })
      .then((res) => {
        console.log(res)
      })
    } catch (error: any) {
      console.log(error)
    }
  }

    // 해시태그 삭제
    const deleteHashtag  = () => {
      try {
        instanceHeader({
          url: `users/hashtags?tag=${newhashtag}`,
          method: 'delete',
        })
        .then((res) => {
          console.log(res)
        })
      } catch (error: any) {
        console.log(error)
      }
    }

  return (
    <SC.Container>
      <SC.BackBtn onClick={() => history.back()}>
        <BiArrowBack size={24} />
      </SC.BackBtn>
      <SC.Title>관심사 키워드 등록</SC.Title>
      <SC.InputBox>
        <SC.HashtagInput placeholder="알람 받으실 키워드를 입력해주세요"
          value={newhashtag}
          onKeyDown={KeyHashtagSave}
          onChange={(e) => {
            setNewhashtag(e.target.value)
          }}/>
        <SC.InputBtn 
          onClick={HashtagSave}
        >등록</SC.InputBtn>
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

