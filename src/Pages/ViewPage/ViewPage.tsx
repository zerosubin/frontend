import ReactDOM from 'react-dom';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react'
import { BsHeart } from 'react-icons/bs';
import { isDeleteState } from '../../recoil/atoms';
import { SC } from './styled.ts'



interface ViewPageProps {
    location: {
      state: {
        titleInput: string
        detailInput: string
        payOption: string
        pay: string
        selectedImage: [string],
        hashTag: [string],
        id: number
        date: string,
      };
    };
  }


export const ViewPage: React.FC<ViewPageProps> = ({ location }) => {
    const { detailInput,titleInput, selectedImage, payOption,pay,hashTag,id,date } = location.state || [];
    const [, setIsDelete] = useRecoilState<boolean>(isDeleteState);
    console.log(selectedImage)
    return(
        <>
        <SC.Container>
            <SC.EditBox>
                <SC.EditButton>수정</SC.EditButton>
                <SC.EditButton onClick={() => setIsDelete(true)}>삭제</SC.EditButton>
            </SC.EditBox>
            <SC.Image src={`${selectedImage}`}></SC.Image>
            <SC.ProfileBox>
                <SC.ProfileImage src="https://velog.velcdn.com/images/josh_yeom/post/072a8a1d-f431-4d5a-be68-4f6bc520a22d/image.png"></SC.ProfileImage>
                <SC.ProfileSubBox>
                    <SC.ProfileNickName>스펀지밥</SC.ProfileNickName>
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
                    <Date>{`${date}`}</Date>
                </SC.ContentSubBox>
                <SC.ContentTitle>{`${titleInput}`}</SC.ContentTitle>
                <SC.ContentHashtag>{`${hashTag}`}</SC.ContentHashtag>
                <SC.ContentDescription>{`${detailInput}`}</SC.ContentDescription>
                <SC.ContentViewCount>조회수 13</SC.ContentViewCount>
            </SC.ContentBox>
            <SC.MoreBox>
                <BsHeart size={30}/>
                <SC.PaymentCondition>{`${payOption}${pay}`}</SC.PaymentCondition>
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
