import { Link } from 'react-router-dom';
import { Container, Title, List, Item, Image, ItemSubBox, Hashtag, ItemTitle, ItemPrice} from './styled'


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

