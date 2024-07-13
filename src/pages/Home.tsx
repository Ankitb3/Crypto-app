import Carosuel from "../components/Carosuel"
import CoinsTable from "../components/CoinsTable"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import OrbitCircle from "../components/OrbitCircle"

const Home = () => {
  return (
    <div className=" bg-[url('/public/banner2.jpg')]">
        <Navbar/>
        <Hero/>
        <Carosuel/>
        <CoinsTable/>
        <OrbitCircle/>
    </div>
  )
}

export default Home