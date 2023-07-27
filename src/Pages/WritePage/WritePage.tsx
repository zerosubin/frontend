import { SC } from './styled'
import { useState, useRef } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { TiCancel } from 'react-icons/ti';
import { FaTimes } from 'react-icons/fa'
import axios from 'axios'


export default function WritePage() {
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<string[]>([]);
  const [titleInput, setTitleInput] = useState<string>('');
  const [payOption, setPayOption] = useState<string>('')
  const [pay, setPay] = useState<string>('')
  const [detailInput, setDetailInput] = useState<string>('')
  const [hashTagInput, setHashTagInput] = useState<string>('');
  const [hashTag, setHashTag] = useState<string[]>([]);
  const [date, setDate] = useState<string>('')


  const handleButtonClick = () => {
    hiddenInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
      setSelectedImage((prevImages) => [...prevImages, ...newImages]);
    }
  };
  

  const handleHashTagInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHashTagInput(e.target.value);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter' || e.key === ' ') {
    const value = e.currentTarget.value.trim();
    setHashTagInput('')
    if (value !== '') {
      if(hashTag.length < 5){
        setHashTag((prevHashTag) => [...prevHashTag, value]);
        e.currentTarget.value = ''; 
      }else{
        alert('해시태그는 5개까지 입력할 수 있습니다.');
      }
    }

    e.preventDefault();
  }
  }
  
  const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInput(e.target.value)
    console.log(titleInput)
  }

  const handleDeleteHashTag = (index:number) => {
    if (typeof index === 'number') {
      setHashTag((hashTags) => hashTags.filter((_, i) => i !== index));
    }
  }

  const handlePayOption = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setPayOption(e.target.value)
  }

  const handlePay = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPay(e.target.value)
  }

  const handleDetailInput = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetailInput(e.target.value)
  }


  const handleFormSubmit = () => {

    const postData = {
        titleInput,
        detailInput,
        payOption,
        pay,
        selectedImage,
        hashTag,
    };

    // JSON Server가 실행 중인 주소에 게시물 데이터를 업로드합니다.
    axios.post('http://localhost:3000/posts', postData)
      .then((response) => {
        // 서버로부터 받은 응답 처리 (옵션이 필요한 경우 사용)
        console.log(response.data);
        // 요청이 성공하면 여기서 추가적인 작업을 수행할 수 있습니다.
      })
      .catch((error) => {
        // 요청이 실패한 경우 처리
        console.error(error);
      });
  };


  const DraggableImage: React.FC<{ src: string; index: number }> = ({ src, index }) => {
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setData('text/plain', index.toString());
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
    };

    const handleDeleteImage = (index: number) => {
      if (typeof index === 'number') {
        setSelectedImage((prevImages) => prevImages.filter((_, i) => i !== index));
      }
    };
    
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      // 드롭한 이미지의 인덱스 가져오기
      const dragIndex = Number(e.dataTransfer.getData('text/plain'));
      // 드랍 대상 이미지의 인덱스 가져오기
      const hoverIndex = index;
      // 이미지 순서 변경
      const newImages = [...selectedImage];
      const dragImage = newImages[dragIndex];
      newImages.splice(dragIndex, 1);
      newImages.splice(hoverIndex, 0, dragImage);
      setSelectedImage(newImages);
    };

   
    return (
      <div
        style={{ position: 'relative', cursor: 'move' }}
        draggable
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <SC.Image src={src} alt={`Selected Image`} />
        <SC.DeleteButton onClick={() => handleDeleteImage(index)}>
          <BiMinus />
        </SC.DeleteButton>
      </div>
    );
  };

  return (
    <SC.Container>
      <SC.ImgBox>
        {selectedImage.length < 5 && (
          <SC.HiddenInput onChange={handleImageChange} ref={hiddenInputRef} multiple />
        )}
        <SC.CustomButton onClick={handleButtonClick}>
          {selectedImage.length < 5 ? <BsPlusLg /> : <TiCancel />}
        </SC.CustomButton>
        <SC.SelectedImageBox>
          {selectedImage &&
            selectedImage.map((item, index) => (
              <DraggableImage key={index} index={index} src={item} />
            ))}
        </SC.SelectedImageBox>
      </SC.ImgBox>
      <SC.Title>제목</SC.Title>
      <SC.TitleBox>
        <SC.TitleInput onChange={handleTitleInput}></SC.TitleInput>
      </SC.TitleBox>
      <SC.Title>가격</SC.Title>
      <SC.PayBox>
        <SC.PayDetailBox>
          <SC.PayOption onChange={handlePayOption}>
            <option value="건당">건당</option>
            <option value="시급">시급</option>
          </SC.PayOption>
          <SC.PayInput type="number" step="500" onChange={handlePay}></SC.PayInput>
        </SC.PayDetailBox>
      </SC.PayBox>
      <SC.Title>의뢰 내용</SC.Title>
      <SC.DetailBox>
        <SC.Detail onChange={handleDetailInput}></SC.Detail>
      </SC.DetailBox>
      <SC.Title>해시태그</SC.Title>
      <SC.HashTagSubBox>
        { hashTag.length > 0 ? 
          hashTag.map((item, index) => <SC.HashTag key={index}>{`#${item}`}<SC.HashTagCancel>
            <FaTimes onClick={() => handleDeleteHashTag(index)}></FaTimes>
            </SC.HashTagCancel></SC.HashTag>)
          :  <span style={{color: 'lightgray'}}>해시태그를 입력해주세요</span>
        }
      </SC.HashTagSubBox>
      <SC.HashtagBox>
      <SC.HashtagInput
        onChange={handleHashTagInput}
        onKeyUp={handleKeyUp} 
        value={hashTagInput}
        placeholder="해시 태그를 입력하세요 (공백과 줄바꿈으로 구분)"
      />
      </SC.HashtagBox>
      <SC.SubmitBox>
        <SC.SubmitButton onClick={handleFormSubmit}>등록하기</SC.SubmitButton>
      </SC.SubmitBox>
    </SC.Container>
  );
}
