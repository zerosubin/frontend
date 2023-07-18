import { Route, Routes } from "react-router-dom"
import LoginPage from './Pages/LoginPage'
import MainPage from './Pages/MainPage'
import SingupPage from "./Pages/SingupPage"
import SingupDetailPage from "./Pages/SingupDetailPage"
import WritePage from './Pages/WritePage'

export default function PageRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/write" element={<WritePage />}></Route>
        <Route path="/singup" element={<SingupPage />}></Route>
        <Route path="/singup/detail" element={<SingupDetailPage />}></Route>
      </Routes>
    </>
  )
}
