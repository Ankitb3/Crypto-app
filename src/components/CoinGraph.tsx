// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { HistoricalChart } from "../config/api";
// import { CoinsContext } from "../Context/CoinsContext/CoinContext";
// import React from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from 'recharts';
// interface CoinGraphProps {
//   coin: {
//     id:string
//   };
  
// }
// type HistoricData ={
//  prices:string[]
// }

// const CoinGraph: React.FC<CoinGraphProps> = ({ coin }) => {
//   const { coinState } =useContext(CoinsContext);

//   const [historicData, setHistoricData] = useState<HistoricData>({
//     prices: [] 
//   });
//   console.log(historicData?.prices,"data");
//  const days = 1
//   useEffect(() => {
//     axios.get(HistoricalChart(coin.id,days,coinState?.currencyState?.currency)).then((res)=>setHistoricData(res.data.prices))
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [coin.id]);
 
//   const tremorData = [
//     { timestamp: '2024-07-17', price: 10 },
//     { timestamp: '2024-07-18', price: 15 },
//     { timestamp: '2024-07-19', price: 8 },
//     { timestamp: '2024-07-20', price: 12 },
//     { timestamp: '2024-07-21', price: 16 },
//     { timestamp: '2024-07-22', price: 20 },
//     { timestamp: '2024-07-23', price: 18 },
//     { timestamp: '2024-07-24', price: 14 },
//   ];
//   // Chart options
 
//   return (
//     <div className="bg-white">
//       {historicData ? (
//         <div>
//           <p>Historical Data Loaded</p>
//           {/* <Line data={{
//             // labels:historicData.map((coin)=>{
//             //   let date = new Date.now(coin[0]);
//             //   let time =
//             //   date.getHours() > 12 ?`${date.getHours() - 12} : ${date.getMinutes()} PM` :`${date.getHours()} : ${date.getMinutes()} AM`

//             //   return days === 1 ? time : date.toLocaleDateString();
//             // }),
//             datasets: [{
//               data: [20, 10],
//             }],
//             labels: ['a', 'b']
//           }}></Line> */}
//            <div>
    
//     </div>
          
//           {/* Render your historical data here */}
//         </div>
//       ) : (
//         <p>Loading historical data...</p>
//       )}
//     </div>
//   );
  
// };

// export default CoinGraph;









import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";
import { CoinsContext } from "../Context/CoinsContext/CoinContext";
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
interface CoinGraphProps {
  coin: {
    id:string
  };
  
}
type HistoricData ={
 prices:string[]
}

const CoinGraph: React.FC<CoinGraphProps> = ({ coin }) => {
  const { coinState } =useContext(CoinsContext);
console.log(coin,"coin");

  const [historicData, setHistoricData] = useState<HistoricData>({
    prices: [] 
  });
  console.log(historicData?.prices,"data");
 const days = 1
  useEffect(() => {
    axios.get(HistoricalChart(coin?.id,days,coinState?.currencyState?.currency)).then((res)=>setHistoricData(res.data.prices))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coin?.id]);
 
  const data = [
    { timestamp: '2024-07-17', price: 10 },
    { timestamp: '2024-07-18', price: 15 },
    { timestamp: '2024-07-19', price: 8 },
    { timestamp: '2024-07-20', price: 12 },
    { timestamp: '2024-07-21', price: 16 },
    { timestamp: '2024-07-22', price: 20 },
    { timestamp: '2024-07-23', price: 18 },
    { timestamp: '2024-07-24', price: 14 },
  ];
  // Chart options
 console.log(historicData,"historic data");
 
  return (
    <div className="bg-white">
      {historicData ? (
         <ResponsiveContainer height={400} className="bg-white">
         <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis dataKey="price" />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
       </ResponsiveContainer>
      ) : (
        <p>Loading historical data...</p>
      )}
    </div>
  );
  
};

export default CoinGraph;
