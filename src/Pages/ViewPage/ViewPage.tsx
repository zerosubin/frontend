import ReactDOM from 'react-dom';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { BsHeart, BsHeartFill} from 'react-icons/bs';
import { BiSolidChevronLeft, BiSolidChevronRight } from 'react-icons/bi'
import { isDeleteState } from '../../recoil/atoms';
import * as SC from './styled'
import { useParams } from 'react-router-dom';
import { instanceHeader } from '../API/axiosAPI.tsx';


interface ItemData{
  title: string;
  content: string;
  payDivision: string;
  pay: string;
  images: string[];
  hashTag: string[];
  id: number;
  location: number[];
  nickname: string,
  likedCount: number,
  createdAt: string,
  viewCount: number,
  deadLine: string
}

  


export const ViewPage = () => {
    const { id } = useParams<{ id: string }>();
    const [itemData, setItemData] = useState<ItemData | null>(null);
    const [, setIsLoading] = useState<boolean | null>(false);
    const [isLike, setIsLike] = useState<boolean>();
    const [, setIsDelete] = useRecoilState<boolean>(isDeleteState);
    const [carouselCount, setCarouselCount] = useState<number>(0)
    const [likeCount, setLikeCount] = useState<number>(0)
    const navigate = useNavigate()
    
    useEffect(() => {
      const fetchData = () => {
        try {
          instanceHeader({
            url: `errands/${id}`,
            method: 'get'
          }).then((res: any) => {
            setItemData(res)
            setIsLoading(false);
            setIsLike(res.liked)
            setLikeCount(res.likedCount)
            console.log(res)
          })
        } catch (error) {
          console.error('데이터 불러오기 실패:', error);
          setIsLoading(false);
        }
      };
      fetchData();
    },[id])

    // 관심글 추가
    const interestsPut = () => {
      try {
        instanceHeader({
          url: `users/interests/${id}`,
          method: 'put'
        }).then((res: any) => {
          console.log(res)
          console.log('추가되었습니다')
        })
      } catch (error) {
        console.log(error)
      }

      try {
        instanceHeader({
          url: `errands/${id}/like`,
          method: 'post'
        }).then((res: any) => {
          console.log(res)
        })
      } catch (error) {
        console.log(error)
      }
    }

    // 관심글 삭제
    const interestDelete = () => {
      try {
        instanceHeader({
          url: `users/interests/${id}`,
          method: 'delete',
        })
        .then((res) => {
          console.log(res)
          console.log('삭제되었습니다')
        })
      } catch (error: any) {
        console.log(error)
      }

      try {
        instanceHeader({
          url: `errands/${id}/like`,
          method: 'post'
        }).then((res: any) => {
          console.log(res)
        })
      } catch (error) {
        console.log(error)
      }
    }

    const handleLike = () => {
      setIsLike(!isLike)
      if(isLike) {
        interestDelete()
        setLikeCount(likeCount - 1)
      } else {
        setLikeCount(likeCount + 1)
        interestsPut()
      }
    }

    const handleEdit = () => {
      try {
        instanceHeader({
          url: `errands/${id}`,
          method: 'put'
        }).then((res: any) => {
          console.log(res)
          navigate('/write')
          setIsDelete(false)
        })
      } catch (error) {
        console.log(error)
      }
    }
    


    const handleRight = () => {
      setCarouselCount(carouselCount + 1)
    }
    
    const handleLeft = () => {
      setCarouselCount(carouselCount - 1)
    }

    



    return(
        <>
        <SC.Container>
            <SC.EditBox>
                <SC.EditButton onClick={() => handleEdit()}>수정</SC.EditButton>
                <SC.EditButton onClick={() => setIsDelete(true)}>삭제</SC.EditButton>
            </SC.EditBox>
            <SC.ImageBox>
              {
                itemData?.images && carouselCount > 0 ? <BiSolidChevronLeft onClick={handleLeft}style={{color: 'rgb(0, 137, 181)',position: 'absolute' ,width: '30px',zIndex: '10', height: '30px', cursor: 'pointer', top:'50%',}}></BiSolidChevronLeft> : <div></div>
              }
              <div  style={{
                  flexDirection: 'row',
                  display: 'flex',
                  transform: `translateX(-${(carouselCount * 100) / (itemData?.images?.length || 1)}%)`,
                  transition: 'transform 0.5s ease-in-out',
                }}>
                {itemData?.images?.map((item,index) => (
                  <SC.Image
                  key={index}
                  src={`${item}`}
                  ></SC.Image>
                  ))}
                </div>
                {
                  itemData?.images && carouselCount < itemData?.images.length - 1  ?  <BiSolidChevronRight onClick={handleRight} style={{color: 'rgb(0, 137, 181)',position: 'absolute' ,width: '30px', height: '30px',zIndex: '10', cursor: 'pointer', top:'50%', right: '0'}}></BiSolidChevronRight> : <div></div>
                }
            </SC.ImageBox>
            <SC.ProfileBox>
                <SC.ProfileImage src="https://velog.velcdn.com/images/josh_yeom/post/072a8a1d-f431-4d5a-be68-4f6bc520a22d/image.png"></SC.ProfileImage>
                <SC.ProfileSubBox>
                    <SC.ProfileNickName>{`${itemData?.nickname}`}</SC.ProfileNickName>
                    <SC.ProfileCount>의뢰수 3</SC.ProfileCount>
                </SC.ProfileSubBox>
                <SC.ProfileGrade>
                    <SC.ProfileSubBox>
                        <SC.GradeAmount>매너 등급</SC.GradeAmount>
                        <SC.Grade>3</SC.Grade>
                    </SC.ProfileSubBox>
                </SC.ProfileGrade>
            </SC.ProfileBox>
            <SC.ContentBox>
                <SC.ContentSubBox>
                    <SC.AskedState>
                     <span style={{color: 'blue'}}>의뢰중</span>
                    </SC.AskedState>
                    <SC.Day>{`${itemData?.createdAt?.match(/^(\d{4}-\d{2}-\d{2})/)?.[0]}`}</SC.Day>
                </SC.ContentSubBox>
                <SC.ContentTitle>{`${itemData?.title}`}</SC.ContentTitle>
                <SC.ContentHashtag>
                </SC.ContentHashtag>
                <SC.ContentDescription>{`${itemData?.content}`}</SC.ContentDescription>
                <SC.ContentViewCount>{`조회수 ${itemData?.viewCount}`}</SC.ContentViewCount>
            </SC.ContentBox>
            <SC.MoreBox>
                {
                  isLike ? <BsHeartFill size={30} onClick={handleLike} style={{ color: 'red', cursor: 'pointer'}} />
                  : <BsHeart size={30} onClick={handleLike} style={{ color: 'red', cursor: 'pointer'}} />
                }
                <SC.PaymentCondition>{`${itemData?.payDivision === 'HOURLY' ? '건당' : '시급'}:${itemData?.pay}`}</SC.PaymentCondition>
                <SC.ChattingButton>채팅하기</SC.ChattingButton>
            </SC.MoreBox>
            <div>{`좋아요 수 ${likeCount}`}</div>
        </SC.Container>
        </>
    )
}

export const DeleteModal: React.FC = () => {
    const [isDelete, setIsDelete] = useRecoilState<boolean>(isDeleteState);
    const navigate = useNavigate()
    const match = window?.location?.href?.match(/\/(\d+)$/);
    const id = match ? match[1] : null;


    useEffect(() => {
        const modalRootMain = document.getElementById('modal-root-main');
        if (modalRootMain) {
          modalRootMain.style.display = isDelete ? 'flex' : 'none';
        }
      }, [isDelete]);

    const handleCancel = () => {
      
      };
    
      const handleDelete = () => {
        try {
          instanceHeader({
            url: `errands/${id}`,
            method: 'delete'
          }).then((res: any) => {
            console.log(res)
            navigate('/search')
            setIsDelete(false)
          })
        } catch (error) {
          console.log(error)
        }
      }
    return ReactDOM.createPortal(
        <SC.Modal>
            <SC.DoYouWantDelete>
                <h2>삭제 하시겠습니까?</h2>
            </SC.DoYouWantDelete>
            <SC.Choice>
                <SC.ChoiceButton onClick={ handleCancel } style={{color: 'blue'}}>취소</SC.ChoiceButton>
                <SC.ChoiceButton onClick={ handleDelete } style={{color: 'red'}}>삭제</SC.ChoiceButton>
            </SC.Choice>
        </SC.Modal>,
        document.getElementById('modal-root-main')!
    )
}
