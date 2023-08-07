import { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { SC } from './styled'
import axios from 'axios'


export default function SearchPage(){
    const [data, setData] = useState<ItemData[]>([])
    const [searchWord, setSearchWord] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    interface ItemData{
        title: string;
        content: string;
        payDivision: string;
        pay: string;
        images: string[];
        hashTag: string[];
        id: number;
        day: string;
        location: number[];
        nickname: string
      }
      

    
    const handlesearchWord = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearchWord(e.target.value);
    }

    const handleKeyUp = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          try {
            setIsLoading(true);
            const response = await axios.get('http://localhost:3000/posts');
            const apiDataArray: ItemData[] = response.data;
            const filteredData = apiDataArray.filter(item => {
              const titleMatches = item.title.includes(searchWord);
              const hashtagMatches = item.hashTag.includes(searchWord);
              return searchWord === '' ? titleMatches : (titleMatches || hashtagMatches);
            });
            setData(filteredData);
            setSearchWord('');
            setIsLoading(false);
          } catch (error) {
            console.error('데이터 불러오기 실패:', error);
            setIsLoading(false);
          }
        }
      };

    return(
        <>
            <SC.Container>
                <SC.Searchbar>
                    <SC.SearchInput 
                    value={searchWord}
                    onChange={handlesearchWord}
                    onKeyUp={handleKeyUp}
                    placeholder={"검색어를 입력해 주세요"}
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
                            <Link
                                to={`/errands/${item.id}`}
                                style={{ textDecoration: "none", color: "#fff" }}
                                >
                                <SC.SearchItem key={index}>
                                    <SC.SearchTitle>{item.title}</SC.SearchTitle>
                                    <SC.SearchHashtag>{item.hashTag}</SC.SearchHashtag>
                                    <SC.SearchPrice>{item.pay}</SC.SearchPrice>
                                    <SC.SearchImage src={`${item.images}`}></SC.SearchImage>
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

