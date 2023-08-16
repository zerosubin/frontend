import {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiSolidBellRing } from 'react-icons/bi'
import { FaExclamation } from 'react-icons/fa'
import { instanceHeader } from '../Pages/API/axiosAPI';
import axios from 'axios';
import { BASE_URL, logintoken } from '../Pages/API/axiosAPI';

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
  const [alarm, setAlarm] = useState<number>(0)
  const LoginUser = sessionStorage.getItem('user')
  
  // useEffect(() => {
  //   axios.get(`${BASE_URL}subscribe`,{
  //     headers: {
  //       Authorization: `Bearer ${logintoken}`,
  //     }}).then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       // 요청이 실패한 경우 처리하는 코드
  //       console.error(error);
  //     });
  //   })

  
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
                {
                  alarm > 0 ? <BiSolidBellRing size={28} color="red" border="1px"/> : <BiSolidBellRing size={28} color="gray" border="1px"/>
                }
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
