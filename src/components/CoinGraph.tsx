import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";

interface CoinGraphProps {
  coin: unknown;
}
type HistoricData ={
 prices:string[]
}

const CoinGraph: React.FC<CoinGraphProps> = ({ coin }) => {
  const [historicData, setHistoricData] = useState<HistoricData>({
    prices: [] 
  });
  console.log(historicData?.prices,"data");

  useEffect(() => {
    axios.get(HistoricalChart("bitcoin",2,"inr")).then((res)=>setHistoricData(res.data))
  }, [coin]);

  return (
    <div className="bg-white">
      {historicData ? (
        <div>
          <p>Historical Data Loaded</p>
          {/* Render your historical data here */}
        </div>
      ) : (
        <p>Loading historical data...</p>
      )}
    </div>
  );
  
};

export default CoinGraph;
