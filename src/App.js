import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./page/Home"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import User from "./page/User"
import CreateData from "./page/CreateData";
import NotFound from './page/NotFound';
import HowToUse from "./page/HowToUse"
import WhyToUse from "./page/WhyToUse"

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/user" element={<User />}/>
    <Route path="/senddata" element={<CreateData />} />
    <Route path="/use" element={<HowToUse />} />
    <Route path='/whyuse' element={<WhyToUse />} />
    <Route path="*" element={<NotFound />} />

    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
