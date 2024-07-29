import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CoinList } from "../config/api";
import { useNavigate } from "react-router-dom";
import { CoinsContext } from "../Context/CoinsContext/CoinContext";
interface Coin {
    name: string;
    id:string;
    market_cap_rank: number;
    image: string;
    current_price: string;
    price_change_percentage_24h: number;
    symbol:string;
    market_cap:string;
}
const Favorite = () => {
  const[coinsData,setCoinData] = useState<Coin[]>([]);
  const { coinState } = useContext(CoinsContext);

  console.log(coinsData);
  const navigate = useNavigate();
  
 useEffect(()=>{
    axios.get(CoinList('inr')).then(res=>setCoinData(res.data))
 },[])

  const itemsPerPage = 10; 
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = coinsData.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(coinsData.length / itemsPerPage);

  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);
console.log(coinState.favorite,"dfdf");

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full  shadow-md rounded my-6">
        <thead>
          <tr className=" uppercase text-sm leading-normal text-white bg-[#6d64ff] ">
            <th className="py-3 px-6 text-left">Coin Name</th>
            <th className="py-3 px-6 text-left">Price</th>
            <th className="py-3 px-6 text-left">24hr Change</th>
            <th className="py-3 px-6 text-left">Market Cap</th>
          </tr>
        </thead>
        <tbody className="text-white text-sm font-light">
          {coinState?.favorite?.map((coin) => (
            <tr key={coin.name} className="border-b border-[#7570cc] hover:bg-gray-900 cursor-pointer " onClick={()=>navigate(`/coin/${coin.id}`)}>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex items-center gap-2 text-xl ">
                <img src={coin.image}  className="h-[70px]"/>
                <div>
                <p className="font-semibold">{coin.name}</p>
                <p>{coin.symbol}</p>
                </div>
                
                </div>
             
              </td>
              <td className="py-3 px-6 text-left">₹{coin.current_price}</td>
              <td className={`py-3 px-6 text-left font-semibold text-lg ${coin.price_change_percentage_24h > 0 ?"text-green-500" :"text-red-600"}`}>{`${coin.price_change_percentage_24h > 0 ? "+":""}${coin.price_change_percentage_24h}`}%</td>
              <td className="py-3 px-6 text-left">{coin.market_cap}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex justify-center mb-3 mt-4">
       
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-[#6d64ff]  text-sm font-medium text-white  ${currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-white hover:bg-gray-50 hover:text-black ${currentPage === index + 1 ? 'bg-[#6d64ff]  text-white' : 'hover:bg-[#6d64ff]  hover:text-white'}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-[#6d64ff]  text-sm font-medium text-white ${currentPage === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
