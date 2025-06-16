import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/homepage"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Navbar from "./components/navbar"

function App() {
  

  return (
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  </BrowserRouter>

  
  )
}

export default App
