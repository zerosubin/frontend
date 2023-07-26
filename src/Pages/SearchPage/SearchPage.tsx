import { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';

import { SkeletonItem, Container, Searchbar, SearchInput, SearchList, SearchItem, SearchTitle, SearchHashtag, SearchPrice, SearchImage} from './styled'

import api from './searchPageAPI.json';


export default function SearchPage(){
    const [data, setData] = useState<ItemData[]>([])
    const [searchWord, setsearchWord] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);


    interface ItemData{
        title:string;
        hashtag: string[];
        price: string;
        image: string;
    }

    
    const handlesearchWord = (e:React.ChangeEvent<HTMLInputElement>) => {
        setsearchWord(e.target.value);
    }

    const handleKeyUp = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const fetchData = async () => {
              try {
                setIsLoading(true);
                const apiDataArray: ItemData[] = Object.values(api).map(item => ({
                    title: item.title,
                    hashtag: item.hashtag,
                    price: item.pay?.price || '', 
                    image: item.image,
                  }));
                  const filteredData = apiDataArray.filter(item => {
                    const titleMatches = item.title.toLowerCase().includes(searchWord.toLowerCase());
                    const hashtagMatches = item.hashtag.includes(searchWord);
                    return searchWord === '' ? titleMatches : (titleMatches || hashtagMatches);
                  });
                  setData(filteredData);
                  setsearchWord('');
                  setTimeout(() => {
                    setIsLoading(false);
                  }, 1000);
              } catch (error) {
                console.error('fail', error);
              }
            };
      
            fetchData();
          }
    }

    return(
        <>
            <Container>
                <Searchbar>
                    <SearchInput 
                    value={searchWord}
                    onChange={handlesearchWord}
                    onKeyUp={handleKeyUp}
                    placeholder={"테스트, 강아지, 산책 검색가능"}
                    >
                    </SearchInput>
                    <BsSearch size={22}/>
                </Searchbar>
                <SearchList>
                        {isLoading ? (
                            <div>
                                <SkeletonItem></SkeletonItem>
                            </div>
                        ) : data.length > 0 ? data.map((item,index) => (
                            <Link to="/view" style={{ textDecoration: "none", color: "#fff"}}>
                                <SearchItem key={index}>
                                    <SearchTitle>{item.title}</SearchTitle>
                                    <SearchHashtag>{item.hashtag}</SearchHashtag>
                                    <SearchPrice>{item.price}</SearchPrice>
                                    <SearchImage src={`${item.image}`}></SearchImage>
                                </SearchItem>
                            </Link>
                        )) :    <div>
                                    검색 결과가 없습니다.
                                </div>
                    }
                </SearchList>
            </Container>
        </>
    );
}

