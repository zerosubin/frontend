import { styled } from "styled-components";

const HashTagCancel = styled.button`
    border: none;
    justify-content: center;
    flex-direction: column;
    background: transparent;
`

const HashTag = styled.div`
    display: inline-block; /* div를 인라인 블록 요소로 변경 */
    white-space: nowrap; /* 텍스트가 줄 바꿈되지 않도록 설정 */
    border: 1px solid black;
    padding: 5px;
    margin: 2px;
    border-radius: 10px;
`

const HashTagSubBox = styled.div`
    width: 100%;
    height: 10%;
`

const HiddenInput = styled.input.attrs({
    type: "file",
    accept: "image/*",
})`
    position: absolute;
    z-index: 1;
    opacity: 0;
    height: 80px;
    width: 90px;
    cursor: pointer;
`

const DeleteButton = styled.div`
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: -10px;
    right: 0;
    font-size: 20px;
    cursor: pointer;
    color: red;
`

const SelectedImageBox = styled.div`
    width: 200px;
    display: flex;
`

const CustomButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 90px;
    background-color: rgb(241, 241, 241);
    border-radius: 10px;
    border: none;
    font-size: 50px;
    margin-right: 20px;
`

const Container = styled.section`
    height: 90vh;
    width: 330px;
    margin: 60px 22px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 0.1em;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: transparent;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
`;
    
const ImgBox = styled.div`
    height: 11%;
    display: flex;
    margin-bottom: 20px;
    overflow-x: scroll;
    width: 100%;
    &::-webkit-scrollbar {
        width: 0.5em;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: transparent;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
`;

const Image = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 90px;
    background-color: rgb(241, 241, 241);
    border-radius: 10px;
    margin-right: 10px;
`
const Title = styled.h3`
    margin-bottom: 5px;
`;
const TitleBox = styled.div`
    display: flex;
    width: 100%;;
    flex-direction: column;
    margin-bottom: 20px;
`;
const TitleInput = styled.input`
    height: 30px;
    border-radius: 10px;
    border: 0.5px solid gray;
    `;
const PayBox = styled.div`
    width: 100%;
    margin-bottom: 20px;
    `;
const PayDetailBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const PayOption = styled.select`
    width: 20%;
    height: 40px;
    border: none;
    background-color: rgb(241, 241, 241);
    font-size: 15px;
    border-radius: 10px;
`
const PayInput = styled.input`
    height: 40px;
    width: 90%;
    font-size: 15px;
    border-radius: 10px;
    border: 1px solid gray;
`
const DetailBox = styled.div`
    width: 100%;
    height: 30%;
    margin-bottom: 20px;
`

const Detail = styled.textarea`
    width: 100%;
    height: 100%;
    resize: none;
    border: 1px solid gray;
    box-sizing: border-box;
    `;
const HashtagBox = styled.div`
    width: 100%;
    height: 8%;
`
const HashtagInput = styled.input`
    width: 100%;
    padding: 8px;
    height: 30px;
    border-radius: 10px;
    border: 0.5px solid gray;
    `;

const SubmitBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
`

const SubmitButton = styled.button`
    width: 50%;
    height: 50%;
    border-radius: 10px;
    background-color: rgb(0, 137, 181);
    color: white;
    font-size: 15px;
`;

export const SC = { HashTagCancel,HashTagSubBox,HashTag,DeleteButton, SelectedImageBox, CustomButton, HiddenInput, Container, ImgBox, Image, Title, TitleBox, TitleInput, PayBox, PayDetailBox, PayOption, PayInput, DetailBox, Detail, HashtagBox, HashtagInput, SubmitBox, SubmitButton };