import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import 'react-toastify/dist/ReactToastify.css';
import SingleCoin from "./components/SingleCoin"
import { ToastContainer } from "react-toastify";
const App = () => {

  return (
    <div className=" bg-[url('/public/banner2.jpg')] min-h-screen">
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/coin/:id" element={<SingleCoin/>}/>
    </Routes>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </div>
     )
}

export default App;