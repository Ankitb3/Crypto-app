// // // Define the types
// // interface Coin {
// //   name: string;
// //   id:string;
// //   market_cap_rank: number;
// //   image: string;
// //   current_price: string;
// //   price_change_percentage_24h: number;
// //   symbol:string;
// //   market_cap:string;
// // }

// // type CurrencyState = {
// //   currency: string;
// // };

// // // Context
// // import React, { createContext, useState } from 'react';

// // type CoinsContextType = {
// //   coinsData: Coin[];
// //   currencyState: CurrencyState;
// //   setCurrencyState: React.Dispatch<React.SetStateAction<CurrencyState>>;
  
// // };

// // export const CoinsContext = createContext<CoinsContextType>({
// //   coinsData: [],
// //   currencyState: { currency: 'inr' },
// //   setCurrencyState: () => {}
// // });

// // type CoinsProviderProps = {
// //   children: React.ReactNode;
// // };

// // export const CoinsProvider: React.FC<CoinsProviderProps> = ({ children }) => {
// //   const[coinsData,setCoinData] = useState<Coin[]>([]);

// //   const [currencyState, setCurrencyState] = useState<CurrencyState>({ currency: 'inr' });

// //   return (
// //       <CoinsContext.Provider value={{ coinsData,setCoinData, currencyState, setCurrencyState }}>
// //           {children}
// //       </CoinsContext.Provider>
// //   );
// // }
// // Define the types
// interface Coin {
//   name: string;
//   id: string;
//   market_cap_rank: number;
//   image: string;
//   current_price: string;
//   price_change_percentage_24h: number;
//   symbol: string;
//   market_cap: string;
// }

// interface CurrencyState {
//   currency: string;
// }

// interface CoinState {
//   coinsData: Coin[]; // Include coinsData in CoinState
//   currencyState: CurrencyState;
// }

// // Context
// import React, { createContext, useState } from 'react';

// type CoinsContextType = {
//   coinState: CoinState; // Use CoinState here
//   setCoinState: React.Dispatch<React.SetStateAction<CoinState>>;
// };

// export const CoinsContext = createContext<CoinsContextType>({
//   coinState: {
//     coinsData: [],
//     currencyState: { currency: 'inr' },
//   },
//   setCoinState: () => {},
// });

// type CoinsProviderProps = {
//   children: React.ReactNode;
// };

// export const CoinsProvider: React.FC<CoinsProviderProps> = ({ children }) => {
//   const [coinState, setCoinState] = useState<CoinState>({
//     coinsData: [],
//     currencyState: { currency: 'inr' },
//   });

//   return (
//     <CoinsContext.Provider value={{ coinState, setCoinState }}>
//       {children}
//     </CoinsContext.Provider>
//   );
// };
// Define the types
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
  coinFound:boolean
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
    coinFound:false
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
    coinFound:false
  });

  return (
    <CoinsContext.Provider value={{ coinState, setCoinState }}>
      {children}
    </CoinsContext.Provider>
  );
};
