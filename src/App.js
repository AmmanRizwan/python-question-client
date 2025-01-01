import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Python from "./page/Python"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import User from "./page/User"
import CreateData from "./page/CreateData";
import NotFound from './page/NotFound';
import HowToUse from "./page/HowToUse"
import LandingPage from "./page/LandingPage"
import Nav from "./components/Nav"

function App() {
  const ShowCustomNav = () => {
    const location = useLocation();
    const setNavBar = location.pathname === "/";
    return setNavBar ? <Nav /> : <NavBar />
  }

  return (
    <>
    <BrowserRouter>
    <ShowCustomNav />
    <Routes>

    <Route path="/python" element={<Python />} />
    <Route path="/user" element={<User />}/>
    <Route path="/senddata" element={<CreateData />} />
    <Route path="/use" element={<HowToUse />} />
    <Route path="*" element={<NotFound />} />
    <Route path="/" element={<LandingPage />}/>

    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
