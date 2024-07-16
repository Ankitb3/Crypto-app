// Define the types
type Coin = {
  name: string;
  value: number;
};

type CurrencyState = {
  currency: string;
};

// Context
import React, { createContext, useContext, useState } from 'react';

type CoinsContextType = {
  coins: Coin[];
  currencyState: CurrencyState;
  setCurrencyState: React.Dispatch<React.SetStateAction<CurrencyState>>;
};

export const CoinsContext = createContext<CoinsContextType>({
  coins: [],
  currencyState: { currency: 'inr' },
  setCurrencyState: () => {}
});

type CoinsProviderProps = {
  children: React.ReactNode;
};

export const CoinsProvider: React.FC<CoinsProviderProps> = ({ children }) => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [currencyState, setCurrencyState] = useState<CurrencyState>({ currency: 'inr' });

  return (
      <CoinsContext.Provider value={{ coins, currencyState, setCurrencyState }}>
          {children}
      </CoinsContext.Provider>
  );
}
