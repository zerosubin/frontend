import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { BsPencil } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsMap } from "react-icons/bs";
import { BsChatDots } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";


const StyledFooter = styled.div`
  .modalFooter {
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    color: white;
    background-color: skyblue;
  }
  
  .iconBox{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .iconBox:hover{
    cursor: pointer;
  }
`;

const Footer: React.FC = () => {
    return ReactDOM.createPortal(
      <StyledFooter>
        <div className="modalFooter">
            <div className="iconBox">
                <BsPencil size={24}/>
                <span>의뢰</span>
            </div>
            <div className="iconBox">
                <BsSearch size={24}/>
                <span>검색</span>
            </div>
            <div className="iconBox">
                <BsMap size={24}/>
                <span>지도</span>
            </div>
            <div className="iconBox">
                <BsChatDots size={24}/>
                <span>채팅</span>
            </div>
            <div className="iconBox">
                <BsPersonCircle size={24}/>
                <span>마이</span>
            </div>
        </div>
      </StyledFooter>,
      document.getElementById('modal-root')!
    );
  };
export default Footer;