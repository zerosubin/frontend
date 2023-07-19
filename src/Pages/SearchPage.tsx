import styled from 'styled-components';
import { BsSearch } from "react-icons/bs";

export default function SearchPage(){
    return(
    <>
        <Container>
            <Searchbar>
                <SearchInput></SearchInput>
                <BsSearch size={22}/>
            </Searchbar>
            <SearchList>
                <SearchItem>
                    <SearchTitle></SearchTitle>
                    <SearchHashtag></SearchHashtag>
                    <SearchPrice></SearchPrice>
                    <SearchImage src=""></SearchImage>
                </SearchItem>
            </SearchList>
        </Container>
    </>
    );
}
const Container = styled.section`
    height: 100vh;
    width: 330px;
    margin: 60px 22px;
`
const Searchbar = styled.div`
    width: 100%;
    height: 4%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const SearchInput = styled.input`
    width: 85%;
    height: 100%;
    border-radius: 10px;
    border: none;
    background-color: lightgray;
    outline: none;
    font-size: 20px;
    padding-left: 10px;
`
const SearchList = styled.li`
    width: 100%;
    list-style:none;
`
const SearchItem = styled.ul`
    width; 100%;
    height: 90px;
    border: 1px solid lightgray;
    border-radius: 10px;
`
const SearchTitle = styled.div``
const SearchHashtag = styled.div``
const SearchPrice = styled.div``
const SearchImage = styled.img``
