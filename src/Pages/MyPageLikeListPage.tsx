import { styled } from "styled-components"

export default function MyPageLikeListPage() {
  return (
    <Container>
      <Title>관심글 목록</Title>
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