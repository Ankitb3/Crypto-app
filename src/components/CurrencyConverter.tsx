

import { Select } from '@headlessui/react';
import { useContext } from 'react';
import { CoinsContext } from '../Context/CoinsContext/CoinContext';
export function CurrencyConverter() {
    const { coinState ,setCoinState} =useContext(CoinsContext);
    const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newCurrency = event.target.value;
        setCoinState(prev=>({
          ...prev,
          currencyState:{currency:newCurrency}
        }));
        console.log(newCurrency,"paisa");
        
    };

  return (
    <Select name="status" aria-label="Project status" className="cursor-pointer p-1 ml-4 rounded-md" value={coinState?.currencyState?.currency} 
    onChange={handleCurrencyChange}>
      <option value="usd">USD</option>
      <option value="inr">INR</option>
    </Select>
  )
}