import { Route, Routes } from "react-router-dom"
import LoginPage from './Pages/LoginPage/LoginPage'
import MainPage from './Pages/MainPage/MainPage'
import WritePage from './Pages/WritePage/WritePage'
import MyPage from "./Pages/Mypage/MyPage"
import MyhashtagPage from "./Pages/MyhashtagPage/MyhashtagPage"
import MyPageEditPage from "./Pages/MyPageEditPage/MyPageEditPage"
import MyPageLikeListPage from "./Pages/MyPageLikeListPage/MyPageLikeListPage"
import { ViewPage } from './Pages/ViewPage/ViewPage';
import SearchPage from './Pages/SearchPage/SearchPage';
import AlarmPage from "./Pages/AlarmPage/AlarmPage"
import ReviewErranderPage from "./Pages/ReviewErranderPage/ReviewErranderPage"
import ReviewSolverPage from "./Pages/ReviewSolverPage/ReviewSolverPage"
import SignupDetailPage from "./Pages/SignpDetailPage/SignupDetailPage"
import SignupPage from "./Pages/SignupPage/SignupPage"


export default function PageRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/write" element={<WritePage />}></Route>
        <Route path="/view" element={<ViewPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/alarm" element={<AlarmPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/signup/detail" element={<SignupDetailPage />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/mypage/edit" element={<MyPageEditPage />}></Route>
        <Route path="/mypage/hashtag" element={<MyhashtagPage />}></Route>
        <Route path="/mypage/likelist" element={<MyPageLikeListPage />}></Route>
        <Route path="/review/errander" element={<ReviewErranderPage />}></Route>
        <Route path="/review/solver" element={<ReviewSolverPage />}></Route>
      </Routes>
    </>
  )
}
