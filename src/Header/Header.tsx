import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
  .modalHeader {
    position: absolute;
    width: 100%;
    display: flex;
    top: 0;
    justify-content: space-around;
    font-size: 10px;
    color: white;
    background-color: skyblue;
  }

  h2:hover{
    cursor: pointer;
  }
`;

const MentBox =  styled.div`
  display: flex;
`

const Blue = styled.h2`
  padding: 0 4px;
  color: #0089B5;
`

const Header: React.FC = () => {
    return ReactDOM.createPortal(
      <StyledHeader>
        <div className="modalHeader">
          <Link to="/" style={{ textDecoration: "none", color: "#000"}}>
            <MentBox>
              <h2>우리동네</h2><Blue>해결사</Blue>
            </MentBox>
          </Link>
          <Link to="/login" style={{ textDecoration: "none", color: "#000"}}>
            <h2>로그인</h2>
          </Link>
        </div>
      </StyledHeader>,
      document.getElementById('modal-root')!
    );
  };
export default Header;
