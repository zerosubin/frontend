import { DeleteButton,SelectedImageBox,CustomButton, HiddenInput ,Container, ImgBox, Image, Title, TitleBox, TitleInput, PriceBox, PriceDetailBox, PriceCategory,PriceInput,DescriptionBox,Description,HashtagBox, HashtagInput, SubmitBox, SubmitButton} from './styled.ts';
import { useState, useRef } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'
import { TiCancel } from 'react-icons/ti'

export default function WritePage(){
    const hiddenInputRef = useRef<HTMLInputElement | null>(null);
    const [selectedImage, setSelectedImage] = useState<string[]>([]);
  
    const handleButtonClick = () => {
        hiddenInputRef.current?.click(); // HiddenInput의 클릭 이벤트 호출
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files && files.length > 0) {
            const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
            setSelectedImage((prevImages) => [...prevImages, ...newImages]);
        }
      };


      const handleDeleteImage = (index: number) => {
        if(typeof(index) === 'number'){
            setSelectedImage((prevImages) => prevImages.filter((_, i) => i !== index))
        }
      }


    return(
        <>
        <Container>
            <ImgBox>
                {selectedImage.length < 5 &&
                    <HiddenInput
                    onChange={handleImageChange}
                    ref={hiddenInputRef} // HiddenInput에 ref를 추가하여 참조를 저장합니다
                    multiple
                    />
                }
                <CustomButton onClick={handleButtonClick}>{selectedImage.length < 5 ? <BsPlusLg></BsPlusLg> : <TiCancel></TiCancel>}</CustomButton>
                <SelectedImageBox>
                {selectedImage && selectedImage.map((item, index) => (
                    <div key={index} style={{ position: 'relative' }}>
                        <Image src={item} alt={`Selected Image`} />
                        <DeleteButton onClick={() => handleDeleteImage(index)}>
                            <BiMinus/>
                        </DeleteButton>
                    </div>
                ))}
                </SelectedImageBox>
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

