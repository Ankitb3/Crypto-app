import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SingleCoin from "./components/SingleCoin"
const App = () => {

  return (
    <div className=" bg-[url('/public/banner2.jpg')] min-h-screen">
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/coin/:id" element={<SingleCoin/>}/>
    </Routes>
    </div>
     )
}

export default App;