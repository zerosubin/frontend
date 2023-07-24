import { useState, useRef } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { TiCancel } from 'react-icons/ti';

interface WritePageProps {}

const WritePage: React.FC<WritePageProps> = () => {
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<string[]>([]);

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

  const handleDeleteImage = (index: number) => {
    if (typeof index === 'number') {
      setSelectedImage((prevImages) => prevImages.filter((_, i) => i !== index));
    }
  };

  // 드래그 앤 드롭에 사용할 이미지 컴포넌트
  const DraggableImage: React.FC<{ src: string; index: number }> = ({ src, index }) => {
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
      // 드래그를 시작할 때 드래그 데이터 설정
      e.dataTransfer.setData('text/plain', index.toString());
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      // 드롭 허용 설정
      e.preventDefault();
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
        <img src={src} alt={`Selected Image`} />
        <button onClick={() => handleDeleteImage(index)}>
          <BiMinus />
        </button>
      </div>
    );
  };

  return (
    <>
      <div>
        {selectedImage.length < 5 && (
          <input type="file" onChange={handleImageChange} ref={hiddenInputRef} multiple />
        )}
        <button onClick={handleButtonClick}>
          {selectedImage.length < 5 ? <BsPlusLg /> : <TiCancel />}
        </button>
        <div>
          {selectedImage &&
            selectedImage.map((item, index) => (
              <DraggableImage key={index} index={index} src={item} />
            ))}
        </div>
      </div>
    </>
  );
};

export default WritePage;
