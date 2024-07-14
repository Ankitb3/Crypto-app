import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";

interface CoinGraphProps {
  coin: string;
}
type HistoricData ={
 prices:string
}

const CoinGraph: React.FC<CoinGraphProps> = ({ coin }) => {
  const [historicData, setHistoricData] = useState<HistoricData>(null); // Adjust 'any' to match your data structure
  const [days, setDays] = useState<number>(1);
console.log(historicData?.prices,"data");

  useEffect(() => {
    axios.get(HistoricalChart("bitcoin",days,"inr")).then((res)=>setHistoricData(res.data))
  }, [coin, days]);

  return (
    <div className="bg-white">
      CoinGraph Component
    </div>
  );
};

export default CoinGraph;
