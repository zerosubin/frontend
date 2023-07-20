import ReactDOM from 'react-dom';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react'
import { BsHeart } from 'react-icons/bs';
import { isDeleteState } from '../../recoil/atoms.tsx';
import { Date, Container, EditBox, EditButton, Image, ProfileBox, ProfileImage, ProfileSubBox, ProfileNickName, ProfileCount, ProfileGrade, GradeAmount, Grade, ContentBox, ContentSubBox, AskedState, ContentTitle, ContentHashtag, ContentDescription, ContentViewCount, MoreBox, PaymentCondition, ChattingButton, Modal ,DoYouWantDelete, Choice,ChoiceButton} from './styled.ts'

export function ViewPage(){
    const [, setIsDelete] = useRecoilState<boolean>(isDeleteState);
    return(
        <>
        <Container>
            <EditBox>
                <EditButton>수정</EditButton>
                <EditButton onClick={() => setIsDelete(true)}>삭제</EditButton>
            </EditBox>
            <Image src="https://velog.velcdn.com/images/josh_yeom/post/0adace92-1b73-47f7-ad35-263af5e04191/image.png"></Image>
            <ProfileBox>
                <ProfileImage src="https://velog.velcdn.com/images/josh_yeom/post/072a8a1d-f431-4d5a-be68-4f6bc520a22d/image.png"></ProfileImage>
                <ProfileSubBox>
                    <ProfileNickName>스펀지밥</ProfileNickName>
                    <ProfileCount>의뢰수 3</ProfileCount>
                </ProfileSubBox>
                <ProfileGrade>
                    <ProfileSubBox>
                        <GradeAmount>매너 등급</GradeAmount>
                        <Grade>3</Grade>
                    </ProfileSubBox>
                </ProfileGrade>
            </ProfileBox>
            <ContentBox>
                <ContentSubBox>
                    <AskedState>의뢰중</AskedState>
                    <Date>2023.05.01</Date>
                </ContentSubBox>
                <ContentTitle>아침산책 가능하신 분</ContentTitle>
                <ContentHashtag>#강아지 #푸들 #산책</ContentHashtag>
                <ContentDescription>오전 8시~9시에 가능하신 분 구합니다! 채팅주세요~</ContentDescription>
                <ContentViewCount>조회수 13</ContentViewCount>
            </ContentBox>
            <MoreBox>
                <BsHeart size={30}/>
                <PaymentCondition>건당 20,000원</PaymentCondition>
                <ChattingButton>채팅하기</ChattingButton>
            </MoreBox>
        </Container>
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
        <Modal>
            <DoYouWantDelete>
                <h2>삭제 하시겠습니까?</h2>
            </DoYouWantDelete>
            <Choice>
                <ChoiceButton onClick={ handleCancel } style={{color: 'blue'}}>취소</ChoiceButton>
                <ChoiceButton onClick={ handleDelete } style={{color: 'red'}}>삭제</ChoiceButton>
            </Choice>
        </Modal>,
        document.getElementById('modal-root-main')!
    )
}