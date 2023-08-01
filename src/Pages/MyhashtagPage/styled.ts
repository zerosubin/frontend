import { styled } from "styled-components"

const Container = styled.section`
  height: 100vh;
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
const BackBtn = styled.button`
  width: 100%;
  display: flex;
  border: 0;
  background-color: #fff;
  cursor: pointer;
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

export const SC = { BackBtn, Container, Title, InputBox, HashtagInput, InputBtn, HashtagListBox, ListTitle, ListBox, HashtageBox, HashtagMent, DeleteButton}