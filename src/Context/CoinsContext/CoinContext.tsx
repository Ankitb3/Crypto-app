interface Coin {
  name: string;
  id: string;
  market_cap_rank: number;
  image: string;
  current_price: string;
  price_change_percentage_24h: number;
  symbol: string;
  market_cap: string;
}

interface CurrencyState {
  currency: string;
}

interface CoinState {
  coinsData: Coin[];
  currencyState: CurrencyState;
  searchCoinText: string; 
  filteredCoin:Coin[],
  coinFound:boolean,
  favorite:[]
}

import React, { createContext, useState } from 'react';

type CoinsContextType = {
  coinState: CoinState;
  setCoinState: React.Dispatch<React.SetStateAction<CoinState>>;
};

export const CoinsContext = createContext<CoinsContextType>({
  coinState: {
    coinsData: [],
    currencyState: { currency: 'inr' },
    searchCoinText: '', 
    filteredCoin:[],
    coinFound:false,
    favorite:[]
  },
  setCoinState: () => {},
});

type CoinsProviderProps = {
  children: React.ReactNode;
};

export const CoinsProvider: React.FC<CoinsProviderProps> = ({ children }) => {
  const [coinState, setCoinState] = useState<CoinState>({
    coinsData: [],
    currencyState: { currency: 'inr' },
    searchCoinText: '', 
    filteredCoin:[],
    coinFound:false,
    favorite:[]
  });

  return (
    <CoinsContext.Provider value={{ coinState, setCoinState }}>
      {children}
    </CoinsContext.Provider>
  );
};
