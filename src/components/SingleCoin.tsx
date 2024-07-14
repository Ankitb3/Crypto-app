import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import axios from "axios";
import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser"
import Loader from "./Loader";
import CoinGraph from "./CoinGraph";
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
     },[id])
     return (
        <div>
            <Navbar/>
            {loading ? (
                <Loader />
            ) : (
                CoinData && ( // Check if CoinData is defined
                    <div className="flex flex-wrap justify-between">
                        <div className="w-[40%] flex items-center flex-col text-white">
                            <img src={CoinData.image.large} className="h-[160px]"/>
                            <p className=" font-extrabold text-xl">{CoinData.id}</p>
                            <p className=" font-semibold text-lg">{ReactHtmlParser(CoinData.description.en?.split(". ")[0])}.</p>
                            {/* <h2>Rank:{CoinData.market_cap_rank}</h2>
                            <h2>Price:{CoinData.market_data.current_price.inr}</h2> */}
                            <h2>Total Supply:</h2>
                            <h2>Contract Address:</h2>
                        </div>
                        <div><CoinGraph coin={CoinData}/></div>
                    </div>
                )
            )}
        </div>
    );
    
}

export default SingleCoin