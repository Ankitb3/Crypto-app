import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { useEffect } from "react"
import AOS from 'aos';
const App = () => {
 useEffect(()=>{
  AOS.init()
 },[])
  return (
    <Routes>
     <Route path="/" element={<Home/>}/>
    </Routes>
     )
}

export default App