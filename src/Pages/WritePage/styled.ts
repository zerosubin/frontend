import { styled } from "styled-components";

export const HiddenInput = styled.input.attrs({
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

export const DeleteButton = styled.div`
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: -10px;
    right: 0;
    cursor: pointer;
`

export const SelectedImageBox = styled.div`
    width: 200px;
    display: flex;
`

export const CustomButton = styled.button`
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

export const Container = styled.section`
    height: 100vh;
    width: 330px;
    margin: 60px 22px;
`;
    
export const ImgBox = styled.div`
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

export const Image = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 90px;
    background-color: rgb(241, 241, 241);
    border-radius: 10px;
    margin-right: 10px;
`
export const Title = styled.h3`
    margin-bottom: 5px;
`;
export const TitleBox = styled.div`
    display: flex;
    width: 100%;;
    flex-direction: column;
    margin-bottom: 20px;
`;
export const TitleInput = styled.input`
    height: 30px;
    border-radius: 10px;
    border: 0.5px solid gray;
    `;
export const PriceBox = styled.div`
    width: 100%;
    margin-bottom: 20px;
    `;
export const PriceDetailBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const PriceCategory = styled.select`
    width: 20%;
    height: 40px;
    border: none;
    background-color: rgb(241, 241, 241);
    font-size: 15px;
    border-radius: 10px;
`
export const PriceInput = styled.input`
    height: 40px;
    width: 90%;
    font-size: 15px;
    border-radius: 10px;
    border: 1px solid gray;
`
export const DescriptionBox = styled.div`
    width: 100%;
    height: 30%;
    margin-bottom: 20px;
`

export const Description = styled.textarea`
    width: 100%;
    height: 100%;
    resize: none;
    border: 1px solid gray;
    box-sizing: border-box;
    `;
export const HashtagBox = styled.div`
    width: 100%;
    height: 5%;
`
export const HashtagInput = styled.input`
    width: 100%;
    padding: 8px;
    height: 30px;
    border-radius: 10px;
    border: 0.5px solid gray;
    `;

export const SubmitBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
`

export const SubmitButton = styled.button`
    width: 50%;
    height: 50%;
    border-radius: 10px;
    background-color: rgb(0, 137, 181);
    color: white;
    font-size: 15px;
`;