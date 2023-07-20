import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Container, Searchbar, SearchInput, SearchList, SearchItem, SearchSubBox, SearchTitle, SearchHashtag, SearchPrice, SearchImage} from './styled'

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

