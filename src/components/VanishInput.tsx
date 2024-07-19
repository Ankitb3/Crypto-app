
import { useContext } from "react";
import  {PlaceholdersAndVanishInput}  from "../components/magicui/animateInput";
import { CoinsContext } from "../Context/CoinsContext/CoinContext";

export function  AnimatedInput() {
  const placeholders = [
    "Search a cryptoCurrency",
    "More than 200 cryptoCurrency listed",
    "Find all crypto",
    "Historic data",
  ];
  const { coinState ,setCoinState} =useContext(CoinsContext);
  console.log(coinState.coinFound,"coinfouns");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoinState(prev=>({...prev,searchCoinText:e.target.value}));
    const filterData = coinState.coinsData?.filter((data)=>  data.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
    data.symbol.toLowerCase().includes(e.target.value.toLowerCase()));    
    setCoinState(prev=>({...prev,filteredCoin:filterData}));
    if(filterData.length === 0){
      setCoinState(prev=>({...prev,coinFound:true}));
    }
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col justify-center  items-center px-4"> 
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
