import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import CoinGraph from "./CoinGraph";
import BuyButton from "./BuyButton";
interface CoinData {
    image: {
        large: string;
    };
    id: string;
    description: {
        en: string;
    };
}
const SingleCoin = () => {
    const {id} = useParams<{ id?: string }>();
   const [CoinData,setCoinData] = useState<CoinData | null>(null);
   const[loading,setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then((res)=>{
            setLoading(false)
            setCoinData(res.data)
        }).finally(()=> setLoading(false)
    )
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])
     return (
        <div>
            <Navbar/>
            {loading ? (
                <Loader />
            ) : (
                CoinData && ( 
                    <div className="flex h-full w-[90%] flex-wrap">
                        <div className="w-[40%] items-center flex-col text-white">
                            <img src={CoinData.image.large} className="h-[160px]"/>
                            <p className=" font-extrabold text-xl">{CoinData.id.toUpperCase()}</p>
                            <p className=" font-semibold text-lg">{CoinData.description.en?.split(". ")[0]}.</p>
                            {/* <h2>Rank:{CoinData.market_cap_rank}</h2>
                            <h2>Price:{CoinData.market_data.current_price.inr}</h2> */}
                            <h2>Total Supply:</h2>
                            <h2>Contract Address:</h2>
                            <div className="mt-6 flex justify-center">
                            <BuyButton coin={CoinData}/>
                            </div>
                         
                        </div>
                        <div className="bg-white w-[60%]"><CoinGraph coin={CoinData}/></div>
                    </div>
                )
            )}
        </div>
    );
    
}

export default SingleCoin