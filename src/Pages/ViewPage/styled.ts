import { styled } from "styled-components"

const Modal = styled.div`
    width: 80%;
    height: 30%;
    background-color: white;
    border-radius: 10px;
`

const DoYouWantDelete = styled.div`
    display: flex;
    justify-content: center;
    height: 50%;
    align-items: center;
`

const Choice = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
`

const ChoiceButton = styled.button`
    width: 50%;
    font-size: 30px;
    border: 1px solid black;
    background-color: white;
    cursor: pointer;
`

const Container = styled.section`
    height: 100vh;
    width: 330px;
    margin: 60px 22px;
`;
const EditBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
    `
const EditButton = styled.button`
    border: none;
    width: 15%;
    cursor: pointer;
    border-radius: 10%;
`

const Image = styled.img`
    width: 100%;
    height: 330px;
    margin-bottom: 20px;
`

const ProfileBox = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`
const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 100%;
`
const ProfileSubBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    margin: 0 2px;
`
const ProfileNickName = styled.h2`
    font-size: 20px;
    margin: 0;
`
const ProfileCount = styled.div``
const ProfileGrade = styled.div`
    width: 20%;
`

const GradeAmount = styled.h2`
width: 100%;
font-size: 15px;
text-align: center;
margin: 0;
`;
const Grade = styled.h2`
width: 100%;
font-size: 15px;
text-align: center;
margin: 0;
`;

const ContentBox = styled.div`
width: 100%;
margin-bottom: 60px;
`
const ContentSubBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

const AskedState = styled.div`
    color: blue;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;  
`
const Date = styled.div`
    color: gray;
    font-size: 10px;
`
const ContentTitle = styled.h2`
    margin: 0;
    margin-bottom: 10px;
`
const ContentHashtag = styled.div`
    font-size: 13px;
    color: gray;
    margin-bottom: 10px;
`
const ContentDescription = styled.div`
    width: 80%;
    margin-bottom: 10px;
`
const ContentViewCount = styled.div`
font-size: 13px;
color: gray;
`

const MoreBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const PaymentCondition = styled.div`
    font-size: 13px;
    color: gray;
    flex-grow: 1;
`
const ChattingButton = styled.button`
    width: 30%;
    height: 40px;
    color: white;
    border: none;
    background-color: rgb(0, 137, 181);
    border-radius: 10px;
`

export const SC = { Date, Container, EditBox, EditButton, Image, ProfileBox, ProfileImage, ProfileSubBox, ProfileNickName, ProfileCount, ProfileGrade, GradeAmount, Grade, ContentBox, ContentSubBox, AskedState, ContentTitle, ContentHashtag, ContentDescription, ContentViewCount, MoreBox, PaymentCondition, ChattingButton, Modal ,DoYouWantDelete, Choice,ChoiceButton}