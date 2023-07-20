import { styled } from "styled-components";

export const Container = styled.section`
    height: 100vh;
    width: 330px;
    margin: 60px 22px;
`;
    
export const ImgBox = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    overflow: hidden;
`;

export const NoImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 90px;
    background-color: rgb(241, 241, 241);
    border-radius: 10px;
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