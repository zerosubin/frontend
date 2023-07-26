import { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Container, Searchbar, SearchInput, SearchList, SearchItem, SearchTitle, SearchHashtag, SearchPrice, SearchImage} from './styled'
import api from './searchPageAPI.json';


export default function SearchPage(){
    const [data, setData] = useState<ItemData[]>([])
    const [searchWord, setsearchWord] = useState<string>('');
    
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
                    >
                    </SearchInput>
                    <BsSearch size={22}/>
                </Searchbar>
                <SearchList>
                    {
                        data.length > 0 ? data.map((item,index) => (
                            <Link to="/view" style={{ textDecoration: "none", color: "#fff"}}>
                                <SearchItem key={index}>
                                    <SearchTitle>{item.title}</SearchTitle>
                                    <SearchHashtag>{item.hashtag}</SearchHashtag>
                                    <SearchPrice>{item.price}</SearchPrice>
                                    <SearchImage src={`${item.image}`}></SearchImage>
                                </SearchItem>
                            </Link>
                        )) : <div>검색어를 입력해 주세요</div>
                    }
                </SearchList>
            </Container>
        </>
    );
}

