import { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { SC } from './styled'

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
            <SC.Container>
                <SC.Searchbar>
                    <SC.SearchInput 
                    value={searchWord}
                    onChange={handlesearchWord}
                    onKeyUp={handleKeyUp}
                    placeholder={"테스트, 강아지, 산책 검색가능"}
                    >
                    </SC.SearchInput>
                    <BsSearch size={22}/>
                </SC.Searchbar>
                <SC.SearchList>
                        {isLoading ? (
                            <div>
                                <SC.SkeletonItem></SC.SkeletonItem>
                            </div>
                        ) : data.length > 0 ? data.map((item,index) => (
                            <Link to="/view" style={{ textDecoration: "none", color: "#fff"}}>
                                <SC.SearchItem key={index}>
                                    <SC.SearchTitle>{item.title}</SC.SearchTitle>
                                    <SC.SearchHashtag>{item.hashtag}</SC.SearchHashtag>
                                    <SC.SearchPrice>{item.price}</SC.SearchPrice>
                                    <SC.SearchImage src={`${item.image}`}></SC.SearchImage>
                                </SC.SearchItem>
                            </Link>
                        )) :    <div>
                                    검색 결과가 없습니다.
                                </div>
                    }
                </SC.SearchList>
            </SC.Container>
        </>
    );
}

