import { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { SC } from './styled'
import axios from 'axios'
import { instanceHeader } from '../API/axiosAPI';

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
        hashtags: string[];
        id: number;
      }
      

    
    const handlesearchWord = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearchWord(e.target.value);
    }

    const handleKeyUp = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            try{
                instanceHeader({
                    url: 'errands',
                    method: 'get',
                }).then((response: any) => {
                    const responsedData = response;
                    setData(responsedData);
                    const filteredData = responsedData.filter((item: ItemData) => {
                    console.log(item)
                    const titleMatches = item.title.includes(searchWord);
                    const hashtagMatches = item.hashtags.includes(searchWord);
                    return searchWord === '' ? titleMatches : (titleMatches || hashtagMatches);
                    });
                    setData(filteredData);
                    setSearchWord('');
                    setIsLoading(false);
                })} catch (error: any) {
                console.log(error)
              }
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
                                    <SC.SearchHashtag>{item.hashtags}</SC.SearchHashtag>
                                    <SC.SearchPrice>{item.pay}</SC.SearchPrice>
                                    <SC.SearchImage src={`https://my-neighbor-solver.s3.ap-northeast-2.amazonaws.com/${item.images[0]}`}></SC.SearchImage>
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

