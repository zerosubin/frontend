import { Container, ImgBox, NoImage, Title, TitleBox, TitleInput, PriceBox, PriceDetailBox, PriceCategory,PriceInput,DescriptionBox,Description,HashtagBox, HashtagInput, SubmitBox, SubmitButton} from './styled.ts';

export default function WritePage(){
    return(
        <>
        <Container>
            <ImgBox>
                <NoImage>사진 첨부</NoImage>
            </ImgBox>
            <Title>제목</Title>
            <TitleBox>
                <TitleInput></TitleInput>
            </TitleBox>
            <Title>가격</Title>
            <PriceBox>
                <PriceDetailBox>
                    <PriceCategory>
                        <option value="건당">건당</option>
                        <option value="시급">시급</option>
                    </PriceCategory>
                    <PriceInput type="number"step="500" ></PriceInput>
                </PriceDetailBox>
            </PriceBox>
            <Title>의뢰 내용</Title>
            <DescriptionBox>
                <Description></Description>
            </DescriptionBox>
            <Title>해시태그</Title>
            <HashtagBox>
                <HashtagInput></HashtagInput>
            </HashtagBox>
            <SubmitBox>
                <SubmitButton>등록하기</SubmitButton>
            </SubmitBox>
        </Container>
        </>
    )
}

