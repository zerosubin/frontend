import ReactDOM from 'react-dom';
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

const Header: React.FC = () => {
    return ReactDOM.createPortal(
      <StyledHeader>
        <div className="modalHeader">
          <h2>우리동네 해결사</h2>
          <h2>로그인</h2>
        </div>
      </StyledHeader>,
      document.getElementById('modal-root')!
    );
  };
export default Header;