import { styled } from "styled-components"

export const Container = styled.section`
  height: 100vh;
  margin: 60px 22px;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.h3`
  font-weight: 700;
  font-size: 22px;
  margin: 22px 0;
`

export const ImgNameBox = styled.div`
  display: flex;
`

export const ProBox = styled.div`
  width: 90%;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ImgBox = styled.div`
  width: 55px;
  height: 55px;
  background-color: #b1b1b1;
  
  border-radius: 50%;
`
export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  margin: 0 8px;
`
export const NameMent = styled.span`
  font-weight: 800;
  font-size: 18px;
`
export const LocationMent = styled.span`
  font-size: 12px;
`
export const ProEditBtn = styled.button`
  padding: 8px;
  border: 0;
  border-radius: 12px;
  background-color: #F5F5F5;
  font-weight: 700;
  cursor: pointer;
`

export const UserDosBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 6%;
  margin: 4% 2%;
  border: 0;
  border-radius: 12px;
  background-color: #E4E4E4;
`

export const MannerBox = styled.div`
  display: flex;
  justify-content: space-between;
`
export const MannerTitle = styled.span`
  font-size: 18px;
  font-family: var(--font-nanumfontB);
`

export const MannerNumberBox = styled.div`
  display: flex; 
  align-items: baseline;
`

export const BigMent = styled.span`
  font-size: 22px;
  font-family: var(--font-nanumfontB);
  padding: 0 2px;
`

export const SmMent = styled.span`
  font-size: 14px;
`

export const HashtagBox = styled.div`
`

export const LikeTitle = styled.span`
  font-size: 18px;
  font-family: var(--font-nanumfontB);
`
export const MentBox = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: center;
`
export const LikeEditBtn = styled.button`
  padding: 4px;
  border: 0;
  border-bottom: 1px dashed #000;
  background-color: #E4E4E4;  
  font-weight: 700;
  cursor: pointer;
`

export const HashtagList = styled.div`
  max-width: 269px;
  padding: 8px 0;

  display: flex;
  flex-wrap: wrap;
`

export const Tagment = styled.span`
  padding: 8px;
  margin: 4px;
  border: 0;
  border-radius: 6px;
  background-color: #fff;
  font-size: 12px;
  font-weight: 700;
`

export const LikeListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LikeListTitle = styled.span`
  font-size: 18px;
  font-family: var(--font-nanumfontB);
`

export const LikeListBtn = styled.button`
  border: 0;
  background-color: #E4E4E4;  
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`
export const LogoutBox = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-end;
`
export const LogoutButton = styled.button`
  padding: 3px 0;
  background-color: #fff;
  border: 0;
  border-bottom: 1px solid #000;
  cursor: pointer;
`
export const BtnBox = styled.div`
  width: 95%;
  margin-top: 35%;
  display: flex;
  justify-content: flex-end;
`

export const UserleaveButton = styled.button`
  padding: 6px 12px;
  border: 0;
  border-radius: 6px;
  background-color: #000;
  color: #fff;

  cursor: pointer;
`