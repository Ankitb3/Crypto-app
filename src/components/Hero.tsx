import crypto from "../../public/cryptoo.png"

const Hero = () => {
  return (
    <div>
          <div className="flex items-center align-middle justify-evenly h-[90vh]">
            <h2 className="text-white text-4xl font-semibold" data-aos="zoom-in-right"  data-aos-duration="1000">If things are not failing,<br/> you are not innovating enough</h2>
            <img src={crypto} className="h-120" data-aos="zoom-in-left" data-aos-duration="1000"/>
            </div>
    </div>
  )
}

export default Hero