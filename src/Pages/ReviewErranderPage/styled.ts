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

const FristreviewBox = styled.div``

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 18px auto;
`

const CheckBoxCnt = styled.div`
    input[type=checkbox] {
        display: none;
    }

    input[type=checkbox] + label {
        flex: 1;
        display: inline-block;
        text-align: center;
        background: #fff;
        border: 2px solid #b1b1b1;

        margin: 5px;
        border-radius: 12px;      
        padding: 10px 14px;        
        font-size: 14px;
        cursor: pointer;
    }

    input[type=checkbox]:checked + label {
        background: #0089B5;
        color: #fff;
        border: 0;

        margin: 4px;
        border-radius: 12px;
        padding: 12px 16px;
        font-size: 14px;
        cursor: pointer;
        z-index: 1;
    }
`

const SecondReviewBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  margin: 36px 0 10px 0;
  padding: 8px;
  border: 1px solid #B1B1B1;
  border-radius: 12px;
`

const SmTitle = styled.h4`
  font-weight: 700;
  font-size: 18px;
  margin: 16px 0;
`

const FinishBtn = styled.button`
  width: 75%;
  margin: 12px 0;
  padding: 10px;
  border-radius: 6px;
  border: 0;

  background-color: #0089B5;
  color: #fff;

  font-size: 16px;
  font-weight: 700;

  cursor: pointer;
`

export const SC = { Container, Title, FristreviewBox, IconBox, CheckBoxCnt, SecondReviewBox, SmTitle, FinishBtn }