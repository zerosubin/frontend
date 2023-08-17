import { useEffect, useState } from 'react'
import * as SC from './styled'
import { instance, instanceHeader } from '../API/axiosAPI'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function SolverPage() {
  const { id } = useParams<{ id: string }>();
  const { memberId } = useParams<{ memberId: string}>();
  const [data, setData] = useState<string[]>([])
  const navigate = useNavigate()


useEffect(() => {
  try {
    instanceHeader({
      url: `errands/${id}/perform`,
      method: 'get',
    }).then((res: any) => {
      setData(res)
      console.log(res)
    })
  } catch (error: any) {
    console.log(error)
  }
  },[])


  const solverFixHandler = (memberId: any, nickname: any) => {
    try {
      instanceHeader({
        url: `errands/${id}/performer?memberId=${memberId}`,
        method: 'post',
      }).then((res: any) => {
        alert(`${nickname}님에게 의뢰를 요청합니다.`)
      })
    }catch(error){
      console.log(error)
    }
  }

  const solverHandler = (id: any, errandId: any) => {
    try{
      instanceHeader({
        url:`errands/${id}/finish`,
        method: 'put',
      }).then((res: any) => {
        navigate(`/review/solver/${errandId}`)
      }) 
    }catch(error){
      console.log(error);
    }
  }

  
  return (
    <SC.Container>
      <SC.Title>수행자 목록</SC.Title>
      <SC.ListBox>
      { data.length > 0 && data.map((item:any, index: any) => (
        <SC.ChattingCard key={index}>
                  <SC.RightBox>
                    <SC.ProImgBox>
                      <SC.ProImg  src={item.profileUrl ? item.profileUrl : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} />
                    </SC.ProImgBox>
                      <SC.DoscBox>
                        <SC.Name>{item.nickname}</SC.Name>
                        <SC.LastMent>수행 요청 드립니다.</SC.LastMent>
                      </SC.DoscBox>
                      <SC.SolverFixButton onClick={() => solverFixHandler(item.memberId, item.nickname)}>수행자로 지정하기</SC.SolverFixButton>
                      <SC.SolverButton onClick={() => solverHandler(id, item.errandId)}>수행 완료</SC.SolverButton>
                  </SC.RightBox>
                </SC.ChattingCard>
           )
          )}
      </SC.ListBox>
    </SC.Container>
  )
}
