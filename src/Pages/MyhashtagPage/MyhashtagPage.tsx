import { useState, useEffect } from "react"
import * as SC from './styled'
import { BiArrowBack } from "react-icons/bi"
import { instanceHeader } from "../API/axiosAPI"



export default function MyhashtagPage() {
  const [newhashtag, setNewhashtag] = useState<string>('')
  const [hashtags, setHashtags] = useState<string[]>([])

  // 해시태그 등록, db에 저장
  const HashtagSave =  () => {
    console.log(newhashtag)
    setNewhashtag(newhashtag)
  }

  const KeyHashtagSave = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      console.log(newhashtag)
      setNewhashtag('')
    }
  }

  // 해시태그 조회
  useEffect(() => {
    try {
      instanceHeader({
        url: 'users/hashtags',
        method: 'get',
      })
      .then((res: any) => {
        console.log(res)
        setHashtags(res.hashtag)
      })
    } catch (error: any) {
      console.log(error)
    }
  },[])
    


  // 해시태그 등록
  const postHashtag  = () => {
    setNewhashtag('')
    setHashtags([...hashtags, newhashtag])
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

  


    // 해시태그 삭제
    const deleteHashtag  = (item:string ,index: number) => {
      if (typeof index === 'number') {
        setHashtags((hashTags) => hashTags.filter((_, i) => i !== index));
      }
      try {
        instanceHeader({
          url: `users/hashtags?tag=${item}`,
          method: 'delete',
        })
        .then((res:any) => {
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
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              postHashtag();
            }
          }
        }
          onChange={(e) => {
            setNewhashtag(e.target.value)
          }}/>
        <SC.InputBtn 
          onClick={postHashtag}
        >등록</SC.InputBtn>
      </SC.InputBox>
      <SC.HashtagListBox>
        <SC.ListTitle>나의 관심사 키워드</SC.ListTitle>
        <SC.ListBox>
          {hashtags.length > 0 ? 
            hashtags.map((item: any, index: number) => (
              <div key={index}>
                <SC.HashtageBox>
                  <SC.HashtagMent>{item}</SC.HashtagMent>
                  <SC.DeleteButton onClick={() => deleteHashtag(item, index)}>X</SC.DeleteButton>
                </SC.HashtageBox>
              </div>
            )) : <span style={{ color: 'lightgray' }}>해시태그를 입력해주세요</span>
          }
        </SC.ListBox>
      </SC.HashtagListBox>
    </SC.Container>
  )
}

