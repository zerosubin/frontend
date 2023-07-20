import { BrowserRouter } from "react-router-dom"
import Header from './Header/Header.tsx'
import Footer from './Footer/Footer.tsx'
import PageRouter from "./PageRouter.tsx"
import { DeleteModal } from "./Pages/ViewPage/ViewPage.tsx"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Footer />
      <PageRouter />
      <DeleteModal />
    </BrowserRouter>
  )
}

export default App
