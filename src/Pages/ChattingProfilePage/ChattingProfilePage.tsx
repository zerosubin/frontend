import { BiArrowBack } from 'react-icons/bi'
import * as SC from './styled'

export default function ChattingProfilePage() {
  return (
    <SC.Container>
      <SC.BackBtn onClick={() => history.back()}>
        <BiArrowBack size={24} />
      </SC.BackBtn>
      <SC.ImgBox>
        <SC.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7XZ2Imq08ItmvrtqXI-ZRiWNlow7qIshDg&usqp=CAU"/>
      </SC.ImgBox>
      <SC.ProfileBox>
        <SC.Name>스펀지밥</SC.Name>
        <SC.Location>서초대로77길</SC.Location>
        <SC.ReviewBOX>
          <SC.Title>매너 등급</SC.Title>
          <SC.LankScore>1</SC.LankScore>
        </SC.ReviewBOX>
      </SC.ProfileBox>
    </SC.Container>
  )
}
