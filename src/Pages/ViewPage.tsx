import ReactDOM from 'react-dom';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react'
import styled from 'styled-components';
import { BsHeart } from 'react-icons/bs';
import { isDeleteState } from '../recoil/atoms.tsx';


export function ViewPage(){
    const [isDelete, setIsDelete] = useRecoilState<boolean>(isDeleteState);
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
            <DoYouWnatDelete>
                <h2>삭제 하시겠습니까?</h2>
            </DoYouWnatDelete>
            <Choice>
                <ChoiceButton onClick={ handleCancel } style={{color: 'blue'}}>취소</ChoiceButton>
                <ChoiceButton onClick={ handleDelete } style={{color: 'red'}}>삭제</ChoiceButton>
            </Choice>
        </Modal>,
        document.getElementById('modal-root-main')!
    )
}

const Modal = styled.div`
    width: 80%;
    height: 30%;
    background-color: white;
    border-radius: 10px;
`

const DoYouWnatDelete = styled.div`
    display: flex;
    justify-content: center;
    height: 50%;
    align-items: center;
`

const Choice = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
`

const ChoiceButton = styled.button`
    width: 50%;
    font-size: 30px;
    border: 1px solid black;
    background-color: white;
    cursor: pointer;
`

const Container = styled.section`
    height: 100vh;
    width: 330px;
    margin: 60px 22px;
`;
const EditBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
    `
const EditButton = styled.button`
    border: none;
    width: 15%;
    cursor: pointer;
    border-radius: 10%;
`

const Image = styled.img`
    width: 100%;
    height: 330px;
    margin-bottom: 20px;
`

const ProfileBox = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`
const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 100%;
`
const ProfileSubBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    margin: 0 2px;
`
const ProfileNickName = styled.h2`
    font-size: 20px;
    margin: 0;
`
const ProfileCount = styled.div``
const ProfileGrade = styled.div`
    width: 20%;
`

const GradeAmount = styled.h2`
width: 100%;
font-size: 15px;
text-align: center;
margin: 0;
`;
const Grade = styled.h2`
width: 100%;
font-size: 15px;
text-align: center;
margin: 0;
`;

const ContentBox = styled.div`
width: 100%;
margin-bottom: 60px;
`
const ContentSubBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

const AskedState = styled.div`
    color: blue;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;  
`
const Date = styled.div`
    color: gray;
    font-size: 10px;
`
const ContentTitle = styled.h2`
    margin: 0;
    margin-bottom: 10px;
`
const ContentHashtag = styled.div`
    font-size: 13px;
    color: gray;
    margin-bottom: 10px;
`
const ContentDescription = styled.div`
    width: 80%;
    margin-bottom: 10px;
`
const ContentViewCount = styled.div`
font-size: 13px;
color: gray;
`

const MoreBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const PaymentCondition = styled.div`
    font-size: 13px;
    color: gray;
    flex-grow: 1;
`
const ChattingButton = styled.button`
    width: 30%;
    height: 40px;
    color: white;
    border: none;
    background-color: rgb(0, 137, 181);
    border-radius: 10px;
`