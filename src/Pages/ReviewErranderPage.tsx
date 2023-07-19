import styled from "styled-components"

export default function ReviewErranderPage() {
  // 의뢰인 평가 ---> 채팅창에서 평가로 넘어올 수 있도록?
  return (
    <Container>
      <Title>의뢰인 평가</Title>
    </Container>
  )
}

const Container = styled.section`
  heigth: 100vh;
  margin: 60px 22px;

  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h3`
  font-weight: 700;
  font-size: 22px;
  margin: 22px 0;
`