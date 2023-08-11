import ReactDOM from 'react-dom';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react'
import { BsHeart, BsHeartFill} from 'react-icons/bs';
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
  day: string;
  location: number[];
  nickname: string
}

  


export const ViewPage = () => {
    const { id } = useParams<{ id: string }>();
    const [itemData, setItemData] = useState<ItemData | null>(null);
    const [, setIsLoading] = useState<boolean | null>(false);
    // const [ListALL, setListALL] = useRecoilState<any>(likelist)
    const [isLike, setIsLike] = useState<boolean>();
    const [, setIsDelete] = useRecoilState<boolean>(isDeleteState);
  
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
    }

    const handleLike = () => {
      setIsLike(!isLike)
      if(isLike) {
        interestDelete()
      } else {
        interestsPut()
      }
    }


    return(
        <>
        <SC.Container>
            <SC.EditBox>
                <SC.EditButton>수정</SC.EditButton>
                <SC.EditButton onClick={() => setIsDelete(true)}>삭제</SC.EditButton>
            </SC.EditBox>
            <SC.Image src={`https://my-neighbor-solver.s3.ap-northeast-2.amazonaws.com/${itemData?.images}`}></SC.Image>
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
                    <SC.AskedState>의뢰중</SC.AskedState>
                    <SC.Day>{`${itemData?.day}`}</SC.Day>
                </SC.ContentSubBox>
                <SC.ContentTitle>{`${itemData?.title}`}</SC.ContentTitle>
                <SC.ContentHashtag>

                </SC.ContentHashtag>
                <SC.ContentDescription>{`${itemData?.content}`}</SC.ContentDescription>
                <SC.ContentViewCount>조회수 13</SC.ContentViewCount>
            </SC.ContentBox>
            <SC.MoreBox>
                {
                  isLike ? <BsHeartFill size={30} onClick={handleLike} style={{ color: 'red', cursor: 'pointer'}} />
                  : <BsHeart size={30} onClick={handleLike} style={{ color: 'red', cursor: 'pointer'}} />
                }
                <SC.PaymentCondition>{`${itemData?.payDivision}${itemData?.pay}`}</SC.PaymentCondition>
                <SC.ChattingButton>채팅하기</SC.ChattingButton>
            </SC.MoreBox>
        </SC.Container>
        </>
    )
}

export const DeleteModal: React.FC = () => {
    const [isDelete, setIsDelete] = useRecoilState<boolean>(isDeleteState);
    
    useEffect(() => {
        const modalRootMain = document.getElementById('modal-root-main');
        if (modalRootMain) {
          modalRootMain.style.display = isDelete ? 'flex' : 'none';
        }
      }, [isDelete]);

    const handleCancel = () => {
        setIsDelete(false);
      };
    
      const handleDelete = () => {
        // 삭제 로직 처리
        setIsDelete(false);
      };
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
