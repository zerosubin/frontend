import { styled } from "styled-components";

 const Container = styled.section`
    height: 100vh;
    width: 330px;
    margin: 60px 22px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

 const Title = styled.h2`
    margin: 0;
    margin-bottom: 30px;
    color: black;
`


 const List = styled.li`
    width: 100%;
    height: 70%;
    list-style:none;
    overflow: auto;

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
    height: 80%;
    width: 20%;
`

 const Item = styled.ul`
    width: 100%;
    height: 90px;
    border: 1px solid lightgray;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 30px;
`;

 const Hashtag = styled.h2`
    color: blue;
    margin: 0;
    font-size: 20px;
    color: blue;
`
 const ItemSubBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
 const ItemTitle = styled.h2`
    margin: 0;
    font-size: 20px;
    color: black;
    `
 const ItemPrice = styled.div`
    color: lightgray;

`

export const SC = { Container, Title, List, Item, Image, ItemSubBox, Hashtag, ItemTitle, ItemPrice} 