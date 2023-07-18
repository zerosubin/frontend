import axios from 'axios';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { REDIRECT_URI, REST_API_KEY } from '../kakaoLoginData';

const StyledHeader = styled.div`
  .modalHeader {
    position: absolute;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-around;
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

const Header: React.FC = () => {
  const [kakaoToken, setKakaoToken] = useState<any>(null)
  const [kakaoUserDoc, setKakaoUserDoc] = useState<any>(null)

  const params = new URL(document.location.toString()).searchParams
  const code = params.get('code')

  const getToken = async (code: string) => {
    const grant_type = 'authorization_code'
    const client_id = `${REST_API_KEY}`

    const res = await axios.post(
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${code}`,
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      },
    )

    const token = res.data.access_token
    setKakaoToken(token)
  }

  const getKaKaoUserData = async (kakaoToken: any) => {
      const kakaoUser = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
          headers: {
            Authorization: `Bearer ${kakaoToken}`,
          },
      })
      setKakaoUserDoc(kakaoUser.data)
      return await kakaoUser.data
  }
  
  useEffect(() => {
    if (code) {
      getToken(code)
    }
  }, [code])

  useEffect(() => {
    if (kakaoToken) {
      getKaKaoUserData(kakaoToken)
    }
  }, [kakaoToken])
  

  // 카카오 사용자 정보
  // 세션스토리지에 담아서 로그인 성공하면 헤더 로그인버튼 -> 알람 이모티콘으로 변경
  // 로그아웃 버튼 만들기(세션스토리지에서 로그인한 사람 이메일 삭제)
  console.log(kakaoUserDoc)

  // 세션스토리지에서 현재 로그인한 사용자의 email
  // const UserNOW = sessionStorage.getItem('user')

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
                
      document.getElementById('modal-root-header')!
    );
  };
export default Header;
