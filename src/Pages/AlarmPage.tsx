import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function AlarmPage(){
    return(
        <>
        <Container>
            <Title>키워드 알림</Title>
            <List>
                <Link to="/view" style={{ textDecoration: "none", color: "#fff"}}>
                    <Item>
                        <Image src="https://velog.velcdn.com/images/josh_yeom/post/0adace92-1b73-47f7-ad35-263af5e04191/image.png"></Image>
                        <ItemSubBox>
                            <Hashtag>산책</Hashtag>
                            <ItemTitle>강아지 산책 시켜주실 분</ItemTitle>
                            <ItemPrice>시급 10,000원</ItemPrice>
                        </ItemSubBox>
                    </Item>
                </Link>
                <Link to="/view" style={{ textDecoration: "none", color: "#fff"}}>
                    <Item>
                        <Image src="https://velog.velcdn.com/images/josh_yeom/post/0adace92-1b73-47f7-ad35-263af5e04191/image.png"></Image>
                        <ItemSubBox>
                            <Hashtag>산책</Hashtag>
                            <ItemTitle>강아지 산책 시켜주실 분</ItemTitle>
                            <ItemPrice>시급 10,000원</ItemPrice>
                        </ItemSubBox>
                    </Item>
                </Link>
                <Link to="/view" style={{ textDecoration: "none", color: "#fff"}}>
                    <Item>
                        <Image src="https://velog.velcdn.com/images/josh_yeom/post/0adace92-1b73-47f7-ad35-263af5e04191/image.png"></Image>
                        <ItemSubBox>
                            <Hashtag>산책</Hashtag>
                            <ItemTitle>강아지 산책 시켜주실 분</ItemTitle>
                            <ItemPrice>시급 10,000원</ItemPrice>
                        </ItemSubBox>
                    </Item>
                </Link>
                <Link to="/view" style={{ textDecoration: "none", color: "#fff"}}>
                    <Item>
                        <Image src="https://velog.velcdn.com/images/josh_yeom/post/0adace92-1b73-47f7-ad35-263af5e04191/image.png"></Image>
                        <ItemSubBox>
                            <Hashtag>산책</Hashtag>
                            <ItemTitle>강아지 산책 시켜주실 분</ItemTitle>
                            <ItemPrice>시급 10,000원</ItemPrice>
                        </ItemSubBox>
                    </Item>
                </Link>
                <Link to="/view" style={{ textDecoration: "none", color: "#fff"}}>
                    <Item>
                        <Image src="https://velog.velcdn.com/images/josh_yeom/post/0adace92-1b73-47f7-ad35-263af5e04191/image.png"></Image>
                        <ItemSubBox>
                            <Hashtag>산책</Hashtag>
                            <ItemTitle>강아지 산책 시켜주실 분</ItemTitle>
                            <ItemPrice>시급 10,000원</ItemPrice>
                        </ItemSubBox>
                    </Item>
                </Link>
                <Link to="/view" style={{ textDecoration: "none", color: "#fff"}}>
                    <Item>
                        <Image src="https://velog.velcdn.com/images/josh_yeom/post/0adace92-1b73-47f7-ad35-263af5e04191/image.png"></Image>
                        <ItemSubBox>
                            <Hashtag>산책</Hashtag>
                            <ItemTitle>강아지 산책 시켜주실 분</ItemTitle>
                            <ItemPrice>시급 10,000원</ItemPrice>
                        </ItemSubBox>
                    </Item>
                </Link>
            </List>
        </Container>
        </>
    )
}

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