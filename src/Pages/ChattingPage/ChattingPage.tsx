import { useState, useEffect,useRef } from 'react';
import * as SC from './styled';
import { IoIosSend } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs'; // 추가
import { BASE_URL, logintoken } from '../API/axiosAPI';



export default function ChattingPage() {
  return (
    <SC.Container>
      <SC.BackBox>
        <SC.BackBtn onClick={() => history.back()}>
          <BiArrowBack size={24} />
        </SC.BackBtn>
        <SC.UserName>스펀지밥</SC.UserName>
      </SC.BackBox>
      <SC.ContentBox>

        <SC.TopBox>
          <SC.WriteImgBox>
            <SC.WriteImg src="https://images.mypetlife.co.kr/content/uploads/2022/12/16162807/IMG_1666-edited-scaled.jpg" />
          </SC.WriteImgBox>
          <SC.DoscBox>
            <SC.Title>아침 산책 가능하신 분</SC.Title>
            <SC.Price>건당 20,000원</SC.Price>
          </SC.DoscBox>
        </SC.TopBox>

        <SC.ChattingBox>

          <SC.Mybox>
            <SC.MyMent>안녕하세요!</SC.MyMent>
          </SC.Mybox>

          <SC.AnotherBox>
            <Link to='/chatting/*/profile' style={{ textDecoration: "none", color: "#000"}}>
              <SC.AnotherImgBox>
                <SC.AnotherImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7XZ2Imq08ItmvrtqXI-ZRiWNlow7qIshDg&usqp=CAU"/>
              </SC.AnotherImgBox>
            </Link>
            <SC.AnotherMent>오늘 가능하신가요</SC.AnotherMent>
          </SC.AnotherBox>

          <SC.Mybox>
            <SC.MyMent>네!</SC.MyMent>
          </SC.Mybox>

        </SC.ChattingBox>

        <SC.SendingChattingBox>
          <SC.SendingInput placeholder='메세지 보내기'
            />
          <SC.SendingBtn>
            <IoIosSend size={32}/>
          </SC.SendingBtn>
        </SC.SendingChattingBox>

      </SC.ContentBox>
    </SC.Container>
  )
}
