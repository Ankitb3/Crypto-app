import Carousel from "../components/Carousel"
// import CoinsTable from "../components/CoinsTable"
import Navbar from "../components/Navbar"
import OrbitCircle from "../components/OrbitCircle"
import { ScrollBasedAnimation } from "../components/ScrollBasedVelocity"
import { AboutCrypto } from "../components/AboutCrypto"
import { TabsDemo } from "../components/Tab"
import FAQ from "../components/Faq"
import { MarqueeDemo } from "../components/Reviews"

const Home = () => {

  return (
    <div>
      <Navbar />
      <OrbitCircle />
      <Carousel />
      <TabsDemo />
      <div className="mt-10">
        <ScrollBasedAnimation text="Discover the Power of Cryptocurrency" />
      </div>
      <AboutCrypto />
      <MarqueeDemo/>
<FAQ/>
      {/* <CoinsTable/> */}
    </div>
  )
}

export default Home;