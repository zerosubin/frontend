import axios from 'axios';
import { useState, useEffect } from 'react';
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
  const [kakaoToken, setKakaoToken] = useState<any>()
  const [kakaoUserDoc, setKakaoUserDoc] = useState<any>()

  const params = new URL(document.location.toString()).searchParams
  const code = params.get('code')

  const getToken = async (code: string) => {
    const grant_type = 'authorization_code'

    const res = await axios.post(
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${process.env.VITE_REST_API_KEY}&redirect_uri=${process.env.VITE_REDIRECT_URI}&code=${code}`,
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      },
    )

    const token = res.data.access_token
    sessionStorage.setItem('kakao-token', token)
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

  if(kakaoUserDoc) {
    sessionStorage.setItem('user', kakaoUserDoc.kakao_account.email)
    console.log('로그인했음!')
  }

  // 로그인한 사람의 이메일 여부
  const LoginUser = sessionStorage.getItem('user')



  // 카카오 user 목록
  // const [kakaoUserlist, setKakaoUserlist] = useState<any>([])

  // const getKakaoUserlist = async (SERVICE_APP_ADMIN_KEY:any) => {
  //   const kakaoUser = await axios.get(`https://kapi.kakao.com/v1/user/ids`, {
  //     headers: {
  //       Authorization: `KakaoAK ${SERVICE_APP_ADMIN_KEY}`
  //     },
  //   })
  //   setKakaoUserlist(kakaoUser.data.elements)
  // }
    
  // useEffect(() => {
  //   if (SERVICE_APP_ADMIN_KEY) {
  //     getKakaoUserlist(SERVICE_APP_ADMIN_KEY)
  //   }
  // }, [])
  
  // 카카오 소셜 user 목록
  // console.log(kakaoUserlist)

  // 회원가입인지 로그인인지 구별
  //const userID = kakaoUserlist.indexOf(kakaoUserID)

    

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
