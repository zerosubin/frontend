import { SC } from './styled'
import { useState, useRef, useEffect } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { TiCancel } from 'react-icons/ti';
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { instanceHeader } from '../API/axiosAPI';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { nicknameState } from '../../recoil/atoms';

export default function WritePage() {
  const [nickname] = useRecoilState<string>(nicknameState);
  const navigate = useNavigate()
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [title, setTitle] = useState<string>('');
  const [payDivision, setpayDivision] = useState<string>('건당')
  const [pay, setPay] = useState<string>('')
  const [content, setcontent] = useState<string>('')
  const [hashTagInput, setHashTagInput] = useState<string>('');
  const [hashTag, setHashTag] = useState<string[]>([]);
  const [deadLineDivision, setDeadLineDivision] = useState<string>('일')
  const [deadLine, setDeadLine] = useState<string>('')
  const [location, setLocation] = useState<number[]>([])

  
  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = 32 // position.coords.latitude; // 위도
        const lon = 24 // position.coords.longitude; // 경도
        setLocation([lat, lon]);
      });
    }
    getLocation(); // 컴포넌트가 렌더링된 후 위치 정보 가져오기
  },[]);




  const handleButtonClick = () => {
    hiddenInputRef.current?.click();
  };

  const handleImageChange = (e: any) => {
    // const files = e.target.files
    // if (files && files.length > 0) {
    //   const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
    //   setImages((prevImages) => [...prevImages, ...newImages]);
    // }
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
  
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleDeleteHashTag = (index:number) => {
    if (typeof index === 'number') {
      setHashTag((hashTags) => hashTags.filter((_, i) => i !== index));
    }
  }

  const handlepayDivision = (e:React.ChangeEvent<HTMLSelectElement>) => {
    if(e.target.value === '건당') {
      setpayDivision('UNIT')
    } else {
      setpayDivision('HOURLY')
    }
  }

  const handlePay = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPay(e.target.value)
  }

  const handlecontent = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setcontent(e.target.value)
  }

  const handleDeadLineDivison = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setDeadLineDivision(e.target.value);
  }

  const handleDeadLine = (e:React.ChangeEvent<HTMLInputElement>) => {
    setDeadLine(e.target.value)
  }


  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    if(title.length > 64){
      alert('제목은 64자 미만으로 작성해주세요')
      return;
    }
    if(content.length > 500){
      alert('본문은 500자 미만으로 작성해주세요')
      return;
    }
    if(parseInt(pay) > 1000000){
      alert('가격은 100만원 이하로 책정해주세요')
      return;
    }


    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    const day: string = (`${year}.${month}.${date}`);


    const errand = {
      title: title,
      payDivision: 'HOURLY',
      pay: pay,
      content: content,
      // images: images,
      // location: location,
      // deadLine: deadLine,
      // deadLineDivision: deadLineDivision,
      // day: day,
      // nickname: nickname
    }

  }


  const DraggableImage: React.FC<{ src: string; index: number }> = ({ src, index }) => {
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setData('text/plain', index.toString());
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
    };

    const handleDeleteImage = (index: number) => {
      if (typeof index === 'number') {
        setImages((prevImages: any[]) => prevImages.filter((_, i) => i !== index));
      }
    };
    
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      // 드롭한 이미지의 인덱스 가져오기
      const dragIndex = Number(e.dataTransfer.getData('text/plain'));
      // 드랍 대상 이미지의 인덱스 가져오기
      const hoverIndex = index;
      // 이미지 순서 변경
      const newImages = [...images];
      const dragImage = newImages[dragIndex];
      newImages.splice(dragIndex, 1);
      newImages.splice(hoverIndex, 0, dragImage);
      setImages(newImages);
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


  // 이게 성공한 거에요!!!
  const onSubmit = async (e:any) => {
    e.preventDefault()
    e.persist()

    let dataSet = {
      title: title,
      payDivision: 'HOURLY',
      pay: pay,
      content: content,
    };

    let files = e.target.profile_files.files;
    let formData = new FormData();
    formData.append("errand", new Blob([JSON.stringify(dataSet)], { type: 'application/json' }))
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }


    try{
      instanceHeader({
        url: 'errands',
        method: 'post',
        data: formData,
        headers: { 
          "Content-Type": "multipart/formed-data",
        },
      })
      .then((res) => {
        console.log(res)
      })
    } catch (error: any) {
      console.log(error)
    }
  };

  return (
    <SC.Container>
      <form onSubmit={(e) => onSubmit(e)} action='errands' method='post' encType="multipart/form-data">
        <input accept="image/*" type='file' name="profile_files"
          multiple onChange={handleImageChange} />
        <p>제목</p>
        <input type='text' onChange={handleTitle} />
        <br />
        <SC.PayDivision onChange={handlepayDivision}>
          <option value="UNIT">건당</option>
          <option value="HOURLY">시급</option>
        </SC.PayDivision>
        <input type='text' onChange={handlePay} />
        <br />
        <SC.PayDivision onChange={handleDeadLineDivison}>
          <option value="day">일</option>
          <option value="time">시간</option>
        </SC.PayDivision>
        <input type='text' onChange={handleDeadLine} />
        <br />
        <span>내용</span>
        <textarea onChange={handlecontent} />
        {/* 버튼에 클릭 없이 form에 바로 onSubmit={(e) => onSubmit(e)} 이걸로 연결돼요!
        글 작성 성공하면 여기 버튼은 작성한 글로 가는 link나 navigator로 이동하면 될 거 같아요*/}
        <input type='submit'/>
      </form>



        {/* <SC.ImgBox>
            {images.length < 5 && (
              <SC.HiddenInput onChange={handleImageChange} ref={hiddenInputRef} multiple />
            )}
            <SC.CustomButton type="button" onClick={handleButtonClick}>
              {images.length < 5 ? <BsPlusLg /> : <TiCancel />}
            </SC.CustomButton>
            <SC.ImagesBox>
              {images &&
                images.map((item, index) => (
                  <DraggableImage key={index} index={index} src={item} />
                ))}
            </SC.ImagesBox>
          </SC.ImgBox>
        <SC.Title>제목</SC.Title>
        <SC.TitleBox>
          <SC.TitleInput onChange={handleTitle}></SC.TitleInput>
        </SC.TitleBox>
        <SC.Title>가격</SC.Title>
        <SC.PayBox>
          <SC.PaySubBox>
            <SC.PayDivision onChange={handlepayDivision}>
              <option value="UNIT">건당</option>
              <option value="HOURLY">시급</option>
            </SC.PayDivision>
            <SC.PayInput type="number" step="500" min="1000" onChange={handlePay}></SC.PayInput>
          </SC.PaySubBox>
        </SC.PayBox>
        <SC.Title>기한</SC.Title>
        <SC.PayBox>
          <SC.PaySubBox>
            <SC.PayDivision onChange={handleDeadLineDivison}>
              <option value="day">일</option>
              <option value="time">시간</option>
            </SC.PayDivision>
            <SC.PayInput type="number" step="1" min="1" onChange={handleDeadLine}></SC.PayInput>
          </SC.PaySubBox>
        </SC.PayBox>
        <SC.Title>의뢰 내용</SC.Title>
        <SC.ContentBox>
          <SC.Content onChange={handlecontent}></SC.Content>
        </SC.ContentBox>
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
        </SC.SubmitBox> */}
    </SC.Container>
  );
      }
