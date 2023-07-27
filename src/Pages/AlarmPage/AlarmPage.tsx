import { Link } from 'react-router-dom';
import { SC } from'./styled';


export default function AlarmPage(){
    return(
        <>
        <SC.Container>
            <SC.Title>키워드 알림</SC.Title>
            <SC.List>
                <Link to="/view" style={{ textDecoration: "none", color: "#fff"}}>
                    <SC.Item>
                        <SC.Image src="https://velog.velcdn.com/images/josh_yeom/post/0adace92-1b73-47f7-ad35-263af5e04191/image.png"></SC.Image>
                        <SC.ItemSubBox>
                            <SC.Hashtag>산책</SC.Hashtag>
                            <SC.ItemTitle>강아지 산책 시켜주실 분</SC.ItemTitle>
                            <SC.ItemPrice>시급 10,000원</SC.ItemPrice>
                        </SC.ItemSubBox>
                    </SC.Item>
                </Link>
            </SC.List>
        </SC.Container>
        </>
    )
}

