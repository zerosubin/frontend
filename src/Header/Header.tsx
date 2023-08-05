import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiSolidBellRing } from 'react-icons/bi'

const StyledHeader = styled.div`
  .modalHeader {
    position: absolute;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    top: 8px;
    gap: 126px;
    z-index: 10;
    font-size: 12px;
    top: 0;
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

const IconBox = styled.div`
`

const Header: React.FC = () => {
  const LoginUser = sessionStorage.getItem('user')
  
  return ReactDOM.createPortal(
      <StyledHeader>
        <div className="modalHeader">
          <Link to="/" style={{ textDecoration: "none", color: "#000"}}>
            <MentBox>
              <h2>우리동네</h2><Blue>해결사</Blue>
            </MentBox>
          </Link>
          {
            LoginUser 
            ?
            <Link to='/alarm' style={{ textDecoration: "none", color: "#000"}}>
              <IconBox>
                <BiSolidBellRing size={28} color="#0089b5" border="1px"/>
              </IconBox>
            </Link>
            :
            <Link to="/login" style={{ textDecoration: "none", color: "#000"}}>
              <h2>로그인</h2>
            </Link>
          }
        </div>
      </StyledHeader>,
                
      document.getElementById('modal-root-header')!
    );
  };
export default Header;
