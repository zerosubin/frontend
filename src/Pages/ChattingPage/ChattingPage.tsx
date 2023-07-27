import * as SC from './styled'

export default function ChattingPage() {
  return (
    <SC.Container>
      <SC.UserName>스펀지밥</SC.UserName>
      <SC.TopBox>
        <SC.WriteImgBox>
          <SC.WriteImg />
        </SC.WriteImgBox>
        <SC.DoscBox>
          <SC.Title>아침 산책 가능하신 분</SC.Title>
          <SC.Price>건당 20,000원</SC.Price>
        </SC.DoscBox>
      </SC.TopBox>
      <SC.ChattingBox>
        <SC.MyMent>안녕하세요!</SC.MyMent>
        <SC.AnotherBox>
          <SC.AnotherImgBox>
            <SC.AnotherImg />
          </SC.AnotherImgBox>
          <SC.AnotherMent>오늘 가능하신가요</SC.AnotherMent>
        </SC.AnotherBox>
      </SC.ChattingBox>
      <SC.SendingChattingBox>
        <SC.SendingInput />
        <SC.SendingBtn></SC.SendingBtn>
      </SC.SendingChattingBox>
    </SC.Container>
  )
}
