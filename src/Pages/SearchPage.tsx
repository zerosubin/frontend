import styled from 'styled-components';
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function SearchPage(){
    return(
        <>
            <Container>
                <Searchbar>
                    <SearchInput></SearchInput>
                    <BsSearch size={22}/>
                </Searchbar>
                <SearchList>
                    <Link to="/view" style={{ textDecoration: "none", color: "#fff"}}>
                        <SearchItem>
                            <SearchSubBox>
                                <SearchTitle>강아지 산책 시켜주실 분</SearchTitle>
                                <SearchHashtag>#강아지 #산책</SearchHashtag>
                                <SearchPrice>시급 10,000원</SearchPrice>
                            </SearchSubBox>
                            <SearchImage src="https://velog.velcdn.com/images/josh_yeom/post/0adace92-1b73-47f7-ad35-263af5e04191/image.png"></SearchImage>
                        </SearchItem>
                    </Link>
                    <Link to="/view" style={{ textDecoration: "none", color: "#fff"}}>
                        <SearchItem>
                            <SearchSubBox>
                                <SearchTitle>강아지 산책 시켜주실 분</SearchTitle>
                                <SearchHashtag>#강아지 #산책</SearchHashtag>
                                <SearchPrice>시급 10,000원</SearchPrice>
                            </SearchSubBox>
                            <SearchImage src="https://velog.velcdn.com/images/josh_yeom/post/0adace92-1b73-47f7-ad35-263af5e04191/image.png"></SearchImage>
                        </SearchItem>
                    </Link>
                    <Link to="/view" style={{ textDecoration: "none", color: "#fff"}}>
                        <SearchItem>
                            <SearchSubBox>
                                <SearchTitle>강아지 산책 시켜주실 분</SearchTitle>
                                <SearchHashtag>#강아지 #산책</SearchHashtag>
                                <SearchPrice>시급 10,000원</SearchPrice>
                            </SearchSubBox>
                            <SearchImage src="https://velog.velcdn.com/images/josh_yeom/post/0adace92-1b73-47f7-ad35-263af5e04191/image.png"></SearchImage>
                        </SearchItem>
                    </Link>
                    <Link to="/view" style={{ textDecoration: "none", color: "#fff"}}>
                        <SearchItem>
                            <SearchSubBox>
                                <SearchTitle>강아지 산책 시켜주실 분</SearchTitle>
                                <SearchHashtag>#강아지 #산책</SearchHashtag>
                                <SearchPrice>시급 10,000원</SearchPrice>
                            </SearchSubBox>
                            <SearchImage src="https://velog.velcdn.com/images/josh_yeom/post/0adace92-1b73-47f7-ad35-263af5e04191/image.png"></SearchImage>
                        </SearchItem>
                    </Link>
                    <Link to="/view" style={{ textDecoration: "none", color: "#fff"}}>
                        <SearchItem>
                            <SearchSubBox>
                                <SearchTitle>강아지 산책 시켜주실 분</SearchTitle>
                                <SearchHashtag>#강아지 #산책</SearchHashtag>
                                <SearchPrice>시급 10,000원</SearchPrice>
                            </SearchSubBox>
                            <SearchImage src="https://velog.velcdn.com/images/josh_yeom/post/0adace92-1b73-47f7-ad35-263af5e04191/image.png"></SearchImage>
                        </SearchItem>
                    </Link>
                    <Link to="/view" style={{ textDecoration: "none", color: "#fff"}}>
                        <SearchItem>
                            <SearchSubBox>
                                <SearchTitle>강아지 산책 시켜주실 분</SearchTitle>
                                <SearchHashtag>#강아지 #산책</SearchHashtag>
                                <SearchPrice>시급 10,000원</SearchPrice>
                            </SearchSubBox>
                            <SearchImage src="https://velog.velcdn.com/images/josh_yeom/post/0adace92-1b73-47f7-ad35-263af5e04191/image.png"></SearchImage>
                        </SearchItem>
                    </Link>
                </SearchList>
            </Container>
        </>
    );
}

const Container = styled.section`
    height: 100vh;
    width: 330px;
    margin: 60px 22px;
    padding-top: 30px;
`;

const Searchbar = styled.div`
    width: 100%;
    height: 4%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

const SearchInput = styled.input`
    width: 85%;
    height: 100%;
    border-radius: 10px;
    border: none;
    background-color: lightgray;
    outline: none;
    font-size: 20px;
    padding-left: 10px;
`;

const SearchList = styled.li`
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

const SearchItem = styled.ul`
    width: 100%;
    height: 90px;
    border: 1px solid lightgray;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`;

const SearchSubBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
`;

const SearchTitle = styled.h2`
    margin: 0;
    font-size: 20px;
    margin-bottom: 10px;
    color: black;
`;

const SearchHashtag = styled.div`
    font-size: 15px;
    color: gray;
`;

const SearchPrice = styled.div`
    font-size: 15px;
    font-weight: bold;  
    color: black;
`;

const SearchImage = styled.img`
    width: 20%;
    height: 100%;
    border-radius: 0 10px 10px 0;
`;
