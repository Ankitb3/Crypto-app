import { useContext, useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { TrendingCoins } from "../config/api";
import axios from "axios";
import { SparkAreaChart } from "@tremor/react";
import { CoinsContext } from "../Context/CoinsContext/CoinContext";
interface Coin {
    id:string;
    name: string;
    market_cap_rank: number;
    image: string;
    current_price: string;
    price_change_percentage_24h: number;
}
const Carousel = () => {
    const [data,setData] = useState<Coin[]>([]);
    const {  currencyState } =useContext(CoinsContext);
    
    const chartdata = [
        {
          month: 'Jan 21',
          Performance: 4000,
        },
        {
          month: 'Feb 21',
          Performance: 3000,
        },
        {
          month: 'Mar 21',
          Performance: 2000,
        },
        {
          month: 'Apr 21',
          Performance: 2780,
        },
    ]      
    const items = data.map((coin, index) => (
        <Link to={`/coin/${coin.id}`} key={index} className="mt-20" >
            <div className="bg-white min-h-[10em] m-2 flex flex-col justify-center items-center p-2 rounded-md hover:-translate-y-6 transition ease-in-out delay-150  hover:z-[-1]  hover:scale-10  duration-300">
                <div className=" w-full flex justify-end"> <div className="w-fit bg-black rounded">
                <p className="text-white font-semibold p-2">Rank {coin.market_cap_rank === 1 ? `${coin.market_cap_rank}🌟` : coin.market_cap_rank}</p>
            </div></div>
            <img src={coin.image}  className="h-[100px]"/>
            <p>{coin.name}</p>
            <p> {currencyState.currency == "inr" ?"₹" :"$"}{coin.current_price}</p>
            <SparkAreaChart
        data={chartdata}
        categories={['Performance']}
        index={coin.current_price}
        colors={['green']}
        className="h-8 w-20 sm:h-10 sm:w-36"
      />
                         <span className={`p-2 rounded-md text-white font-semibold text-lg ${coin.price_change_percentage_24h > 0 ?"bg-green-500" :"bg-red-600"}`}>{`${coin.price_change_percentage_24h > 0 ? "+":""}${coin.price_change_percentage_24h}`}%</span>
            <div className="flex items-center space-x-2.5">
            </div>
            <div>
          
            </div>
            </div>
          
          
        </Link>
    ));

    const responsive = {
        0: { items: 2 },
        512: { items: 4 }
    };
    useEffect(()=>{
        axios.get(TrendingCoins(currencyState.currency)).then((res)=>{
            setData(res.data);
        })
    },[currencyState])

    return (
        <div >
            <p className="text-center text-white text-4xl font-semibold">Trending Coins</p>
            <div>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlay
                autoPlayInterval={1000} 
                animationDuration={1500}
                disableDotsControls
                responsive={responsive}
                items={items}
                disableButtonsControls
            />
            </div>
           
        </div>
    );
};

export default Carousel;
