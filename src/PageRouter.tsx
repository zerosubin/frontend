import { Route, Routes } from "react-router-dom"
import LoginPage from './Pages/LoginPage'
import MainPage from './Pages/MainPage'
import SingupPage from "./Pages/SingupPage"
import SingupDetailPage from "./Pages/SingupDetailPage"
import WritePage from './Pages/WritePage'
import MyPage from "./Pages/MyPage"
import MyhashtagPage from "./Pages/MyhashtagPage"
import MyPageEditPage from "./Pages/MyPageEditPage"
import MyPageLikeListPage from "./Pages/MyPageLikeListPage"
import { ViewPage } from './Pages/ViewPage';
import SearchPage from './Pages/SearchPage';
import AlarmPage from "./Pages/AlarmPage"


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
        <Route path="/singup" element={<SingupPage />}></Route>
        <Route path="/singup/detail" element={<SingupDetailPage />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/mypage/edit" element={<MyPageEditPage />}></Route>
        <Route path="/mypage/hashtag" element={<MyhashtagPage />}></Route>
        <Route path="/mypage/likelist" element={<MyPageLikeListPage />}></Route>
      </Routes>
    </>
  )
}
